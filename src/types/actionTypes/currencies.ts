import { UPDATE_DATA_LIST_VALUES, SET_DATA_LIST_VALUES, CACHE_ALL_DATA_LIST } from '@/constants'

interface IUpdateDataListValues {
  type: typeof UPDATE_DATA_LIST_VALUES;
  payload: any;
}

interface ISetDataListValues {
  type: typeof SET_DATA_LIST_VALUES;
  payload: any;
}

interface ICacheAllDataListValues {
  type: typeof CACHE_ALL_DATA_LIST;
  payload: any;
}

export type CurrenciesActionTypes =
  | IUpdateDataListValues
  | ISetDataListValues
  | ICacheAllDataListValues
