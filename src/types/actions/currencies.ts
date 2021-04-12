import { UPDATE_DATA_LIST_VALUES, SET_DATA_LIST_VALUES, CACHE_ALL_DATA_LIST } from '@/constants'
import { KeyableObj } from '@/types/otherTypes'

interface UpdateDataListValues {
  type: typeof UPDATE_DATA_LIST_VALUES
  payload: KeyableObj
}

interface SetDataListValues {
  type: typeof SET_DATA_LIST_VALUES
  payload: KeyableObj
}

interface CacheAllDataListValues {
  type: typeof CACHE_ALL_DATA_LIST
  payload: KeyableObj
}

export type CurrenciesActionTypes =
  | UpdateDataListValues
  | SetDataListValues
  | CacheAllDataListValues
