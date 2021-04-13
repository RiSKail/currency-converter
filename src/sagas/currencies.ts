import {
  call,
  CallEffect,
  put,
  PutEffectDescriptor,
  select,
  SelectEffectDescriptor,
  SimpleEffect,
  takeEvery,
} from 'redux-saga/effects'

import { CurrenciesAPI } from '@/api/api'
import {
  SWAP_BASE_VALUES,
  CACHE_ALL_DATA_LIST,
  UPDATE_DATA_LIST_VALUES,
  SET_BASE_PRIMARY_TYPE,
  SET_BASE_PRIMARY_VALUE,
  SET_BASE_SECONDARY_VALUE,
  SET_BASE_SECONDARY_TYPE,
} from '@/constants/actions'
import { setDataListValues, updateBasePrimaryValue, updateBaseSecondaryValue } from '@/actions'
import { CountriesActionTypes, ValuesActionTypes, CurrenciesActionTypes } from '@/types/actions'
import { KeyableObj } from '@/types/otherTypes'
import { RootState } from '@/types/rootStateTypes'
import { tryStringifyJSON } from '@/utils/json'

type GeneratorTypes =
  | Generator
  | void
  | CallEffect<CountriesActionTypes | Generator | KeyableObj>
  | SimpleEffect<'SELECT', SelectEffectDescriptor>
  | SimpleEffect<
      'PUT',
      PutEffectDescriptor<CountriesActionTypes | ValuesActionTypes | CurrenciesActionTypes>
    >

function* getBaseCoefficient(): Generator<GeneratorTypes, number[], never> {
  const primaryType: string = yield select((state: RootState) => state.values.primary.type)
  const secondaryType: string = yield select((state: RootState) => state.values.secondary.type)
  const primaryCoefficient: number = yield select(
    (state: RootState) => state.currencies[primaryType] || 1
  )
  const secondaryCoefficient: number = yield select(
    (state: RootState) => state.currencies[secondaryType] || 1
  )
  return [primaryCoefficient, secondaryCoefficient]
}

async function getDataListFetch(): Promise<KeyableObj> {
  if (localStorage.getItem('data') == null) {
    const data = await CurrenciesAPI.getDataList()
      .then((res) => {
        localStorage.setItem('data', tryStringifyJSON(res.data.rates))
        return res.data.rates
      })
      .catch(() => JSON.parse(localStorage.getItem('data') || '{}'))
    return data
  }
  return JSON.parse(localStorage.getItem('data') || '{}')
}

function* calculateSecondaryWorker({
  payload,
}: KeyableObj): Generator<GeneratorTypes, void, number[]> {
  yield put(updateBasePrimaryValue(payload))
  const baseCoefficient = yield getBaseCoefficient()
  const value = String(((+payload / baseCoefficient[0]) * baseCoefficient[1]).toFixed(4))
  yield put(updateBaseSecondaryValue(value))
}

function* getDataListWorker(): Generator<GeneratorTypes, void, never> {
  const data: KeyableObj = yield call(getDataListFetch)
  yield put(setDataListValues(data))
  const currentValue: string = yield select((state: RootState) => state.values.primary.value)
  yield call(calculateSecondaryWorker, { payload: currentValue })
}

function* cacheDataListWorker(): Generator<GeneratorTypes, void, unknown> {
  yield call(getDataListFetch)
}

function* updateSecondaryValueWorker(): Generator<GeneratorTypes, void, string> {
  const currentValue = yield select((state: RootState) => state.values.primary.value)
  yield call(calculateSecondaryWorker, { payload: currentValue })
}

function* updateDataListWorker({ payload }: KeyableObj): Generator<GeneratorTypes, void, never> {
  yield localStorage.setItem('data', tryStringifyJSON(payload))
  yield put(setDataListValues(payload))
  yield call(updateSecondaryValueWorker)
}

function* swapValuesWorker(): Generator<GeneratorTypes, void, string> {
  const primaryValue = yield select((state: RootState) => state.values.primary.value)
  yield call(calculateSecondaryWorker, { payload: primaryValue })
}

function* calculatePrimaryWorker({
  payload,
}: KeyableObj): Generator<GeneratorTypes, void, number[]> {
  yield put(updateBaseSecondaryValue(payload))
  const baseCoefficient: number[] = yield getBaseCoefficient()
  const value = String(((+payload / baseCoefficient[1]) * baseCoefficient[0]).toFixed(4))
  yield put(updateBasePrimaryValue(value))
}

export default function* (): Generator<unknown, void, unknown> {
  yield takeEvery(SET_BASE_PRIMARY_TYPE, getDataListWorker)
  yield takeEvery(SET_BASE_SECONDARY_TYPE, updateSecondaryValueWorker)
  yield takeEvery(SET_BASE_PRIMARY_VALUE, calculateSecondaryWorker)
  yield takeEvery(SET_BASE_SECONDARY_VALUE, calculatePrimaryWorker)
  yield takeEvery(SWAP_BASE_VALUES, swapValuesWorker)
  yield takeEvery(CACHE_ALL_DATA_LIST, cacheDataListWorker)
  yield takeEvery(UPDATE_DATA_LIST_VALUES, updateDataListWorker)
}
