import { UPDATE_DATA_LIST_VALUES, SET_DATA_LIST_VALUES, CACHE_ALL_DATA_LIST } from '@/constants'
import { IKeyableObj } from '@/types/otherTypes'

interface IUpdateDataListValues {
  type: typeof UPDATE_DATA_LIST_VALUES;
  payload: IKeyableObj;
}

interface ISetDataListValues {
  type: typeof SET_DATA_LIST_VALUES;
  payload: IKeyableObj;
}

interface ICacheAllDataListValues {
  type: typeof CACHE_ALL_DATA_LIST;
  payload: IKeyableObj;
}

export type CurrenciesActionTypes =
  | IUpdateDataListValues
  | ISetDataListValues
  | ICacheAllDataListValues
