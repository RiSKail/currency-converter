import { UPDATE_DATA_LIST_VALUES, SET_DATA_LIST_VALUES, CACHE_ALL_DATA_LIST } from '@/constants'

export const updateDataListValues = data => ({
  type: UPDATE_DATA_LIST_VALUES,
  payload: data,
})

export const setDataListValues = data => ({
  type: SET_DATA_LIST_VALUES,
  payload: data,
})

export const cacheAllDataListValues = list => ({
  type: CACHE_ALL_DATA_LIST,
  payload: list,
})
