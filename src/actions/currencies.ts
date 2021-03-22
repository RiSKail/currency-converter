import { UPDATE_DATA_LIST_VALUES, SET_DATA_LIST_VALUES, CACHE_ALL_DATA_LIST } from '@/constants'
import { CurrenciesActionTypes } from '@/types/actionTypes'

export const updateDataListValues = (
  data: any,
): CurrenciesActionTypes => ({
  type: UPDATE_DATA_LIST_VALUES,
  payload: data,
})

export const setDataListValues = (
  data: any,
): CurrenciesActionTypes => ({
  type: SET_DATA_LIST_VALUES,
  payload: data,
})

export const cacheAllDataListValues = (
  list: any,
): CurrenciesActionTypes => ({
  type: CACHE_ALL_DATA_LIST,
  payload: list,
})
