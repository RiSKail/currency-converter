import { UPDATE_DATA_LIST_VALUES, SET_DATA_LIST_VALUES, CACHE_ALL_DATA_LIST } from '@/constants'
import { IkeyableObj } from '@/types/otherTypes'

interface IupdateDataListValues {
  type: typeof UPDATE_DATA_LIST_VALUES;
  payload: IkeyableObj;
}

interface IsetDataListValues {
  type: typeof SET_DATA_LIST_VALUES;
  payload: IkeyableObj;
}

interface IcacheAllDataListValues {
  type: typeof CACHE_ALL_DATA_LIST;
  payload: IkeyableObj;
}

export type CurrenciesActionTypes =
  | IupdateDataListValues
  | IsetDataListValues
  | IcacheAllDataListValues
