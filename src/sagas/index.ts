import firebase from '@/firebase'
import { call, put, select, takeEvery } from 'redux-saga/effects'
import { SET_BASE_PRIMARY_TYPE, SET_BASE_PRIMARY_VALUE, SET_BASE_SECONDARY_VALUE, UPDATE_DATA_LIST_VALUES, SWAP_BASE_VALUES, SET_BASE_SECONDARY_TYPE, CACHE_ALL_DATA_LIST, SIGN_IN, SIGN_UP, SIGN_OUT, FIREBASE_LOGIN } from '@/constants/actions'
import { CurrenciesAPI } from '@/api/api'
import { loginSuccess, loginError, signUpSuccess, signUpError, signOutSuccess, signInUserData, setDataListValues, updateBasePrimaryValue, updateBaseSecondaryValue } from '@/actions'
import { AuthActionTypes } from '@/types/actionTypes'

function tryStringifyJSON (jsonString: any) {
  try {
    if (jsonString && jsonString !== undefined) {
      return JSON.stringify(jsonString)
    }
  } catch (e) { console.error(e) }

  return JSON.stringify(null)
}

export default function * () {
  yield takeEvery(SET_BASE_PRIMARY_TYPE, getDataListWorker)
  yield takeEvery(SET_BASE_SECONDARY_TYPE, updateSecondaryValueWorker)
  yield takeEvery(SET_BASE_PRIMARY_VALUE, calculateSecondaryWorker)
  yield takeEvery(SET_BASE_SECONDARY_VALUE, calculatePrimaryWorker)
  yield takeEvery(SWAP_BASE_VALUES, swapValuesWorker)
  yield takeEvery(CACHE_ALL_DATA_LIST, cacheDataListWorker)
  yield takeEvery(UPDATE_DATA_LIST_VALUES, updateDataListWorker)
  yield takeEvery(SIGN_IN, signInWorker)
  yield takeEvery(SIGN_UP, signUpWorker)
  yield takeEvery(SIGN_OUT, signOutWorker)
  yield takeEvery(FIREBASE_LOGIN, getAuthUserDataWorker)
}

function * getDataListWorker () {
  const data: Object = yield call(getDataListFetch)
  yield put(setDataListValues(data))
  const currentValue: String = yield select((state: any): String => state.values.primary.value)
  yield call(calculateSecondaryWorker, { payload: currentValue })
}

function * cacheDataListWorker () {
  yield call(getDataListFetch)
}

function * updateDataListWorker ({ payload }: any) {
  yield localStorage.setItem('data', tryStringifyJSON(payload))
  yield put(setDataListValues(payload))
  yield call(updateSecondaryValueWorker)
}

function * updateSecondaryValueWorker () {
  const currentValue: String = yield select((state: any): String => state.values.primary.value)
  yield call(calculateSecondaryWorker, { payload: currentValue })
}

function * swapValuesWorker () {
  const primaryValue: string = yield select((state: any): string => state.values.primary.value)
  yield call(calculateSecondaryWorker, { payload: primaryValue })
}

function * calculateSecondaryWorker ({ payload }: any) {
  yield put(updateBasePrimaryValue(payload))
  const baseCoefficient: number[] = yield getBaseCoefficient()
  const value: string = String(((+payload / baseCoefficient[0]) * baseCoefficient[1]).toFixed(4))
  yield put(updateBaseSecondaryValue(value))
}

function * calculatePrimaryWorker ({ payload }: any) {
  yield put(updateBaseSecondaryValue(payload))
  const baseCoefficient: number[] = yield getBaseCoefficient()
  const value: string = String(((+payload / baseCoefficient[1]) * baseCoefficient[0]).toFixed(4))
  yield put(updateBasePrimaryValue(value))
}

function * getBaseCoefficient () {
  const primaryType: string = yield select((state: any): string => state.values.primary.type)
  const secondaryType: string = yield select((state: any): string => state.values.secondary.type)
  const primaryCoefficient:
  number = yield select((state: any): number => state.currencies[primaryType] || 1)
  const secondaryCoefficient:
  number = yield select((state: any): number => state.currencies[secondaryType] || 1)
  return [primaryCoefficient, secondaryCoefficient]
}

function * signInWorker ({ payload }: any) {
  const actionSignIn: AuthActionTypes = yield call(signInFunc, payload)
  yield put(actionSignIn)
  yield getAuthUserDataWorker()
}

function * getAuthUserDataWorker () {
  const uid: string = yield select((state: any): string => state.firebase.auth.uid)
  const actionUserData: AuthActionTypes = yield call(getAuthUserData, uid)
  yield put(actionUserData)
}

function * signUpWorker ({ payload }: any) {
  const action: AuthActionTypes = yield call(signUpFunc, payload)
  yield put(action)
}

function * signOutWorker () {
  const action: AuthActionTypes = yield call(signOutFunc)
  yield put(action)
}

async function getAuthUserData (uid: string) {
  const action = await firebase.firestore()
    .collection('users').doc(uid).get().then((res: any) => signInUserData(res.data()))
  return action
}

async function signOutFunc () {
  const action = await firebase.auth().signOut().then(() => signOutSuccess())
  return action
}

async function signInFunc ({ email, password }: any) {
  const action = await firebase.auth().signInWithEmailAndPassword(
    email,
    password,
  ).then(() => loginSuccess(),
  ).catch((err: any) => loginError(err))
  return action
}

async function signUpFunc ({ email, password, firstName, lastName }: any) {
  const action = await firebase.auth().createUserWithEmailAndPassword(
    email,
    password,
  ).then((resp: any) => {
    return firebase.firestore().collection('users').doc(resp.user.uid).set({
      firstName,
      lastName,
      initials: firstName[0] + lastName[0],
    })
  }).then(() => signUpSuccess(),
  ).catch((err: any) => signUpError(err))
  return action
}

async function getDataListFetch (): Promise<Object> {
  if (JSON.parse(localStorage.getItem('data') || '{}') == null) {
    const data = await CurrenciesAPI.getDataList().then(res => {
      localStorage.setItem('data', tryStringifyJSON(res.data.rates))
      return res.data.rates
    }).catch(() => JSON.parse(localStorage.getItem('data') || '{}'))
    return data
  }
  return JSON.parse(localStorage.getItem('data') || '{}')
}
