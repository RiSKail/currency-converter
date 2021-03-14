import firebase from '@/firebase'
import { call, put, select, takeEvery } from 'redux-saga/effects'
import { SET_BASE_PRIMARY_TYPE, SET_BASE_PRIMARY_VALUE, SET_BASE_SECONDARY_VALUE, UPDATE_DATA_LIST_VALUES, SWAP_BASE_VALUES, SET_BASE_SECONDARY_TYPE, CACHE_ALL_DATA_LIST, SIGNIN, SIGNUP, SIGNOUT, FIREBASE_LOGIN } from '@/constants/actions'
import { CurrenciesAPI } from '@/api/api'
import { loginSuccess, loginError, signUpSuccess, signUpError, signOutSuccess, signInUserData, setDataListValues, updateBasePrimaryValue, updateBaseSecondaryValue } from '@/actions'

export default function * () {
  yield takeEvery(SET_BASE_PRIMARY_TYPE, getDataListWorker)
  yield takeEvery(SET_BASE_SECONDARY_TYPE, updateSecondaryValueWorker)
  yield takeEvery(SET_BASE_PRIMARY_VALUE, calculateSecondaryWorker)
  yield takeEvery(SET_BASE_SECONDARY_VALUE, calculatePrimaryWorker)
  yield takeEvery(SWAP_BASE_VALUES, swapValuesWorker)
  yield takeEvery(CACHE_ALL_DATA_LIST, cacheDataListWorker)
  yield takeEvery(UPDATE_DATA_LIST_VALUES, updateDataListWorker)
  yield takeEvery(SIGNIN, signInWorker)
  yield takeEvery(SIGNUP, signUpWorker)
  yield takeEvery(SIGNOUT, signOutWorker)
  yield takeEvery(FIREBASE_LOGIN, getAuthUserDataWorker)
}

function * getDataListWorker () {
  const data = yield call(getDataListFetch)
  yield put(setDataListValues(data))
  const currentValue = yield select(state => state.values.primary.value)
  yield call(calculateSecondaryWorker, { payload: currentValue })
}

function * cacheDataListWorker () {
  yield call(getDataListFetch)
}

function * updateDataListWorker ({ payload }) {
  yield localStorage.setItem('data', JSON.stringify(payload))
  yield put(setDataListValues(payload))
  yield call(updateSecondaryValueWorker)
}

function * updateSecondaryValueWorker () {
  const currentValue = yield select(state => state.values.primary.value)
  yield call(calculateSecondaryWorker, { payload: currentValue })
}

function * swapValuesWorker () {
  const primaryValue = yield select(state => state.values.primary.value)
  yield call(calculateSecondaryWorker, { payload: primaryValue })
}

function * calculateSecondaryWorker ({ payload }) {
  yield put(updateBasePrimaryValue(payload))
  const baseCoefficient = yield getBaseCoefficient()
  yield put(updateBaseSecondaryValue(String(((+payload / baseCoefficient[0]) * baseCoefficient[1]).toFixed(4))))
}

function * calculatePrimaryWorker ({ payload }) {
  yield put(updateBaseSecondaryValue(payload))
  const baseCoefficient = yield getBaseCoefficient()
  yield put(updateBasePrimaryValue(String(((+payload / baseCoefficient[1]) * baseCoefficient[0]).toFixed(4))))
}

function * getBaseCoefficient () {
  const primaryType = yield select(state => state.values.primary.type)
  const secondaryType = yield select(state => state.values.secondary.type)
  const primaryCoefficient = yield select(state => state.currencies[primaryType] || 1)
  const secondaryCoefficient = yield select(state => state.currencies[secondaryType] || 1)
  return [primaryCoefficient, secondaryCoefficient]
}

function * signInWorker ({ payload }) {
  const actionSignIn = yield call(signInFunc, payload)
  yield put(actionSignIn)
  yield getAuthUserDataWorker()
}

function * getAuthUserDataWorker () {
  const uid = yield select(state => state.firebase.auth.uid)
  const actionUserData = yield call(getAuthUserData, uid)
  yield put(actionUserData)
}

function * signUpWorker ({ payload }) {
  const action = yield call(signUpFunc, payload)
  yield put(action)
}

function * signOutWorker () {
  const action = yield call(signOutFunc)
  yield put(action)
}

async function getAuthUserData (uid) {
  const action = await firebase.firestore().collection('users').doc(uid).get().then(res => signInUserData(res.data()))
  return action
}

async function signOutFunc () {
  const action = await firebase.auth().signOut().then(() => signOutSuccess())
  return action
}

async function signInFunc ({ email, password }) {
  const action = await firebase.auth().signInWithEmailAndPassword(
    email,
    password,
  ).then(() => loginSuccess(),
  ).catch(err => loginError(err))
  return action
}

async function signUpFunc ({ email, password, firstName, lastName }) {
  const action = await firebase.auth().createUserWithEmailAndPassword(
    email,
    password,
  ).then(resp => {
    return firebase.firestore().collection('users').doc(resp.user.uid).set({
      firstName,
      lastName,
      initials: firstName[0] + lastName[0],
    })
  }).then(() => signUpSuccess(),
  ).catch(err => signUpError(err))
  return action
}

async function getDataListFetch () {
  if (JSON.parse(localStorage.getItem('data')) == null) {
    const data = await CurrenciesAPI.getDataList().then(res => {
      localStorage.setItem('data', JSON.stringify(res.data.rates))
      return res.data.rates
    }).catch(() => JSON.parse(localStorage.getItem('data')))
    return data
  }

  return JSON.parse(localStorage.getItem('data'))
}
