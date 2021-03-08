import firebase from '../firebase'
import { call, put, select, takeEvery } from 'redux-saga/effects'
import { SET_BASE_PRIMARY_TYPE, SET_BASE_PRIMARY_VALUE, SET_BASE_SECONDARY_VALUE, SWAP_BASE_VALUES, SET_BASE_SECONDARY_TYPE, CACHE_ALL_DATA_LIST, SIGNIN, SIGNUP, SIGNOUT, FIREBASE_LOGIN } from './../constants/actions'
import { CurrenciesAPI } from './../api/api'
import { updateDataListValues } from '../actions/dataList'
import { updateBasePrimaryValue, updateBaseSecondaryValue } from '../actions/baseValues'
import { loginSuccess, loginError, signUpSuccess, signUpError, signOutSuccess, signInUserData } from '../actions/authActions'

export default function * () {
  yield takeEvery(SET_BASE_PRIMARY_TYPE, getDataListWorker)
  yield takeEvery(SET_BASE_SECONDARY_TYPE, updateSecondaryValueWorker)
  yield takeEvery(SET_BASE_PRIMARY_VALUE, calculateSecondaryWorker)
  yield takeEvery(SET_BASE_SECONDARY_VALUE, calculatePrimaryWorker)
  yield takeEvery(SWAP_BASE_VALUES, swapBaseValuesWorker)
  yield takeEvery(CACHE_ALL_DATA_LIST, getAllDataListWorker)
  yield takeEvery(SIGNIN, signInWorker)
  yield takeEvery(SIGNUP, signUpWorker)
  yield takeEvery(SIGNOUT, signOutWorker)
  yield takeEvery(FIREBASE_LOGIN, getAuthUserDataWorker)
}

function * getDataListWorker ({ payload }) {
  const data = yield call(getDataListFetch, payload)
  yield put(updateDataListValues(data))
  const baseCoefficient = yield getBaseCoefficient()
  const currentValue = yield select(state => state.baseValues.primary.value)
  yield put(updateBaseSecondaryValue(String((+currentValue * baseCoefficient).toFixed(4))))
}

function * getAllDataListWorker ({ payload }) {
  yield call(getAllDataList, payload)
}

function * updateSecondaryValueWorker () {
  const baseCoefficient = yield getBaseCoefficient()
  const currentValue = yield select(state => state.baseValues.primary.value)
  yield put(updateBaseSecondaryValue(String((+currentValue * baseCoefficient).toFixed(4))))
}

function * swapBaseValuesWorker () {
  const primaryType = yield select(state => state.baseValues.primary.type)
  const primaryValue = yield select(state => state.baseValues.primary.value)
  const data = yield call(getDataListFetch, primaryType)
  yield put(updateDataListValues(data))
  const baseCoefficient = yield getBaseCoefficient()
  yield put(updateBaseSecondaryValue(String((primaryValue * baseCoefficient).toFixed(4))))
}

function * calculateSecondaryWorker ({ payload }) {
  yield put(updateBasePrimaryValue(payload))
  const baseCoefficient = yield getBaseCoefficient()
  yield put(updateBaseSecondaryValue(String((+payload * baseCoefficient).toFixed(4))))
}

function * calculatePrimaryWorker ({ payload }) {
  yield put(updateBaseSecondaryValue(payload))
  const baseCoefficient = yield getBaseCoefficient()
  yield put(updateBasePrimaryValue(String((+payload / baseCoefficient).toFixed(4))))
}

function * getBaseCoefficient () {
  const baseType = yield select(state => state.baseValues.secondary.type)
  const baseCoefficient = yield select(state => state.dataList[baseType] || 1)
  return baseCoefficient
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

async function getAllDataList (list) {
  await Object.keys(list).forEach(function (objectKey) {
    const value = list[objectKey]
    getDataListFetch(value)
  })
}

async function getDataListFetch (base) {
  if (JSON.parse(localStorage.getItem(base)) == null) {
    const data = await CurrenciesAPI.getDataListByBase(base).then(res => {
      localStorage.setItem(base, JSON.stringify(res.data.rates))
      return res.data.rates
    }).catch(() => JSON.parse(localStorage.getItem(base)))
    return data
  }

  return JSON.parse(localStorage.getItem(base))
}
