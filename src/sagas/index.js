import { call, put, select, takeEvery } from 'redux-saga/effects'
import { SET_BASE_PRIMARY_TYPE, SET_BASE_PRIMARY_VALUE, SET_BASE_SECONDARY_VALUE, SWAP_BASE_VALUES, SET_BASE_SECONDARY_TYPE, CACHE_ALL_DATA_LIST } from './../constants/actions'
import { CurrenciesAPI } from './../api/api'
import { updateDataListValues } from '../actions/dataList'
import { updateBasePrimaryValue, updateBaseSecondaryValue } from '../actions/baseValues'

export default function * () {
  yield takeEvery(SET_BASE_PRIMARY_TYPE, getDataListWorker)
  yield takeEvery(SET_BASE_SECONDARY_TYPE, updateSecondaryValueWorker)
  yield takeEvery(SET_BASE_PRIMARY_VALUE, calculateSecondaryWorker)
  yield takeEvery(SET_BASE_SECONDARY_VALUE, calculatePrimaryWorker)
  yield takeEvery(SWAP_BASE_VALUES, swapBaseValuesWorker)
  yield takeEvery(CACHE_ALL_DATA_LIST, getAllDataListWorker)
}

function * getDataListWorker (action) {
  const data = yield call(getDataListFetch, action.payload)
  yield put(updateDataListValues(data))
  const baseCoefficient = yield getBaseCoefficient()
  const currentValue = yield select(state => state.baseValues.primary.value)
  yield put(updateBaseSecondaryValue(String(+currentValue * baseCoefficient)))
}

function * getAllDataListWorker (action) {
  yield call(getAllDataList, action.payload)
}

function * updateSecondaryValueWorker () {
  const baseCoefficient = yield getBaseCoefficient()
  const currentValue = yield select(state => state.baseValues.primary.value)
  yield put(updateBasePrimaryValue(String(+currentValue / baseCoefficient)))
}

function * swapBaseValuesWorker () {
  const primaryType = yield select(state => state.baseValues.primary.type)
  const primaryValue = yield select(state => state.baseValues.primary.value)
  const data = yield call(getDataListFetch, primaryType)
  yield put(updateDataListValues(data))
  const baseCoefficient = yield getBaseCoefficient()
  yield put(updateBaseSecondaryValue(String(primaryValue * baseCoefficient)))
}

function * calculateSecondaryWorker (action) {
  yield put(updateBasePrimaryValue(action.payload))
  const baseCoefficient = yield getBaseCoefficient()
  yield put(updateBaseSecondaryValue(String(+action.payload * baseCoefficient)))
}

function * calculatePrimaryWorker (action) {
  yield put(updateBaseSecondaryValue(action.payload))
  const baseCoefficient = yield getBaseCoefficient()
  yield put(updateBasePrimaryValue(String(+action.payload / baseCoefficient)))
}

function * getBaseCoefficient () {
  const baseType = yield select(state => state.baseValues.secondary.type)
  const baseCoefficient = yield select(state => state.dataList[baseType] || 1)
  return baseCoefficient
}

async function getAllDataList (list) {
  await Object.keys(list).forEach(function (objectKey) {
    var value = list[objectKey]
    getDataListFetch(value)
  })
}

async function getDataListFetch (base) {
  if (JSON.parse(localStorage.getItem(base)) == null) {
    const data = await CurrenciesAPI.getDataListByBase(base).then(res => {
      localStorage.setItem(base, JSON.stringify(res.data.rates))
      return res.data.rates
    }).catch(_ => JSON.parse(localStorage.getItem(base)))
    return data
  }

  return JSON.parse(localStorage.getItem(base))
}
