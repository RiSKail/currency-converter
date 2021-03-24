import { UPDATE_DATA_LIST_VALUES, SET_DATA_LIST_VALUES, CACHE_ALL_DATA_LIST } from '@/constants'
import { CurrenciesActionTypes } from '@/types/actions'
import { IKeyableObj } from '@/types/otherTypes'

export const updateDataListValues = (
  data: IKeyableObj,
): CurrenciesActionTypes => ({
  type: UPDATE_DATA_LIST_VALUES,
  payload: data,
})

export const setDataListValues = (
  data: IKeyableObj,
): CurrenciesActionTypes => ({
  type: SET_DATA_LIST_VALUES,
  payload: data,
})

export const cacheAllDataListValues = (
  list: IKeyableObj,
): CurrenciesActionTypes => ({
  type: CACHE_ALL_DATA_LIST,
  payload: list,
})
