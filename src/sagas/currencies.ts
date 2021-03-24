import { call, put, select, takeEvery } from 'redux-saga/effects'
import { CurrenciesAPI } from '@/api/api'
import { SWAP_BASE_VALUES, CACHE_ALL_DATA_LIST, UPDATE_DATA_LIST_VALUES, SET_BASE_PRIMARY_TYPE, SET_BASE_PRIMARY_VALUE, SET_BASE_SECONDARY_VALUE, SET_BASE_SECONDARY_TYPE } from '@/constants/actions'
import { setDataListValues, updateBasePrimaryValue, updateBaseSecondaryValue } from '@/actions'
import { IKeyableObj } from '@/types/otherTypes'
import { IRootState } from '@/types/rootStateTypes'
import { tryStringifyJSON } from '@/utils/json'

export default function * () {
  yield takeEvery(SET_BASE_PRIMARY_TYPE, getDataListWorker)
  yield takeEvery(SET_BASE_SECONDARY_TYPE, updateSecondaryValueWorker)
  yield takeEvery(SET_BASE_PRIMARY_VALUE, calculateSecondaryWorker)
  yield takeEvery(SET_BASE_SECONDARY_VALUE, calculatePrimaryWorker)
  yield takeEvery(SWAP_BASE_VALUES, swapValuesWorker)
  yield takeEvery(CACHE_ALL_DATA_LIST, cacheDataListWorker)
  yield takeEvery(UPDATE_DATA_LIST_VALUES, updateDataListWorker)
}

function * getDataListWorker () {
  const data: IKeyableObj = yield call(getDataListFetch)
  yield put(setDataListValues(data))
  const currentValue: String = yield select((state: IRootState) => state.values.primary.value)
  yield call(calculateSecondaryWorker, { payload: currentValue })
}

function * cacheDataListWorker () {
  yield call(getDataListFetch)
}

function * updateDataListWorker ({ payload }: IKeyableObj) {
  yield localStorage.setItem('data', tryStringifyJSON(payload))
  yield put(setDataListValues(payload))
  yield call(updateSecondaryValueWorker)
}

function * updateSecondaryValueWorker () {
  const currentValue: String = yield select((state: IRootState) => state.values.primary.value)
  yield call(calculateSecondaryWorker, { payload: currentValue })
}

function * swapValuesWorker () {
  const primaryValue: string = yield select((state: IRootState) => state.values.primary.value)
  yield call(calculateSecondaryWorker, { payload: primaryValue })
}

function * calculateSecondaryWorker ({ payload }: IKeyableObj) {
  yield put(updateBasePrimaryValue(payload))
  const baseCoefficient: number[] = yield getBaseCoefficient()
  const value: string = String(((+payload / baseCoefficient[0]) * baseCoefficient[1]).toFixed(4))
  yield put(updateBaseSecondaryValue(value))
}

function * calculatePrimaryWorker ({ payload }: IKeyableObj) {
  yield put(updateBaseSecondaryValue(payload))
  const baseCoefficient: number[] = yield getBaseCoefficient()
  const value: string = String(((+payload / baseCoefficient[1]) * baseCoefficient[0]).toFixed(4))
  yield put(updateBasePrimaryValue(value))
}

function * getBaseCoefficient () {
  const primaryType: string = yield select((state: IRootState) => state.values.primary.type)
  const secondaryType: string = yield select((state: IRootState) => state.values.secondary.type)
  const primaryCoefficient:
  number = yield select((state: IRootState) => state.currencies[primaryType] || 1)
  const secondaryCoefficient:
  number = yield select((state: IRootState) => state.currencies[secondaryType] || 1)
  return [primaryCoefficient, secondaryCoefficient]
}

async function getDataListFetch (): Promise<IKeyableObj> {
  if (JSON.parse(localStorage.getItem('data') || '{}') == null) {
    const data = await CurrenciesAPI.getDataList().then(res => {
      localStorage.setItem('data', tryStringifyJSON(res.data.rates))
      return res.data.rates
    }).catch(() => JSON.parse(localStorage.getItem('data') || '{}'))
    return data
  }
  return JSON.parse(localStorage.getItem('data') || '{}')
}
