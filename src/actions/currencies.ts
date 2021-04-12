import { UPDATE_DATA_LIST_VALUES, SET_DATA_LIST_VALUES, CACHE_ALL_DATA_LIST } from '@/constants'
import { CurrenciesActionTypes } from '@/types/actions'
import { KeyableObj } from '@/types/otherTypes'

export const updateDataListValues = (data: KeyableObj): CurrenciesActionTypes => ({
  type: UPDATE_DATA_LIST_VALUES,
  payload: data,
})

export const setDataListValues = (data: KeyableObj): CurrenciesActionTypes => ({
  type: SET_DATA_LIST_VALUES,
  payload: data,
})

export const cacheAllDataListValues = (list: KeyableObj): CurrenciesActionTypes => ({
  type: CACHE_ALL_DATA_LIST,
  payload: list,
})
