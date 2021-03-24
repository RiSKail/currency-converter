import { SET_BASE_PRIMARY_TYPE, SET_BASE_SECONDARY_TYPE, SET_BASE_PRIMARY_VALUE, SET_BASE_SECONDARY_VALUE, SWAP_BASE_VALUES, UPDATE_BASE_PRIMARY_VALUE, UPDATE_BASE_SECONDARY_VALUE } from '@/constants'

interface ISetBasePrimaryType {
  type: typeof SET_BASE_PRIMARY_TYPE,
  payload: string,
}

interface ISetBaseSecondaryType {
  type: typeof SET_BASE_SECONDARY_TYPE,
  payload: string,
}

interface ISetBasePrimaryValue {
  type: typeof SET_BASE_PRIMARY_VALUE,
  payload: string,
}

interface ISetBaseSecondaryValue {
  type: typeof SET_BASE_SECONDARY_VALUE,
  payload: string,
}

interface IUpdateBaseSecondaryValue {
  type: typeof UPDATE_BASE_SECONDARY_VALUE,
  payload: string,
}

interface IUpdateBasePrimaryValue {
  type: typeof UPDATE_BASE_PRIMARY_VALUE,
  payload: string,
}

interface ISwapValues {
  type: typeof SWAP_BASE_VALUES,
}

export type ValuesActionTypes =
  | ISetBasePrimaryType
  | ISetBaseSecondaryType
  | ISetBasePrimaryValue
  | ISetBaseSecondaryValue
  | IUpdateBaseSecondaryValue
  | IUpdateBasePrimaryValue
  | ISwapValues
