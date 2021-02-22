import { call, put, select, takeEvery } from 'redux-saga/effects'
import { SET_BASE_PRIMARY_TYPE, UPDATE_DATA_LIST_VALUES, SET_BASE_PRIMARY_VALUE, SET_BASE_SECONDARY_VALUE, UPDATE_BASE_SECONDARY_VALUE, UPDATE_BASE_PRIMARY_VALUE, SWAP_BASE_VALUES, SET_BASE_SECONDARY_TYPE } from './../constants/actions'
import { CurrenciesAPI } from './../api/api'

export default function* () {
  yield takeEvery(SET_BASE_PRIMARY_TYPE, getDataListWorker)
  yield takeEvery(SET_BASE_SECONDARY_TYPE, updateSecondaryValueWorker)
  yield takeEvery(SET_BASE_PRIMARY_VALUE, calculateSecondaryWorker)
  yield takeEvery(SET_BASE_SECONDARY_VALUE, calculatePrimaryWorker)
  yield takeEvery(SWAP_BASE_VALUES, swapBaseValuesWorker)
}

function* getDataListWorker(action) {
  const data = yield call(getDataListFetch, action.payload)
  yield put({ type: UPDATE_DATA_LIST_VALUES, payload: data })
  const baseCoefficient = yield getBaseCoefficient()
  const currentValue = yield select(state => state.baseValues.primary.value)
  yield put({ type: UPDATE_BASE_SECONDARY_VALUE, payload: String(+currentValue / baseCoefficient) })
}


function* updateSecondaryValueWorker() {
  const baseCoefficient = yield getBaseCoefficient()
  const currentValue = yield select(state => state.baseValues.primary.value)
  yield put({ type: UPDATE_BASE_SECONDARY_VALUE, payload: String(+currentValue * baseCoefficient) })
}

function* swapBaseValuesWorker() {
  const primaryType = yield select(state => state.baseValues.primary.type)
  const primaryValue = yield select(state => state.baseValues.primary.value)
  const data = yield call(getDataListFetch, primaryType)
  yield put({ type: UPDATE_DATA_LIST_VALUES, payload: data })
  const baseCoefficient = yield getBaseCoefficient()
  yield put({ type: UPDATE_BASE_SECONDARY_VALUE, payload: String(primaryValue * baseCoefficient) })
}

async function getDataListFetch(base) {
  const data = await CurrenciesAPI.getDataListByBase(base).then((res) => res.data.rates)
  return data
}

function* calculateSecondaryWorker(action) {
  yield put({ type: UPDATE_BASE_PRIMARY_VALUE, payload: action.payload })
  const baseCoefficient = yield getBaseCoefficient()
  yield put({ type: UPDATE_BASE_SECONDARY_VALUE, payload: String(+action.payload * baseCoefficient) })
}

function* calculatePrimaryWorker(action) {
  yield put({ type: UPDATE_BASE_SECONDARY_VALUE, payload: action.payload })
  const baseCoefficient = yield getBaseCoefficient()
  yield put({ type: UPDATE_BASE_PRIMARY_VALUE, payload: String(+action.payload / baseCoefficient) })
}

function* getBaseCoefficient() {
  const baseType = yield select(state => state.baseValues.secondary.type)
  const baseCoefficient = yield select(state => state.dataList[baseType] || 1)
  return baseCoefficient
}