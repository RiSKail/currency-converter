import { SET_BASE_PRIMARY_TYPE, SET_BASE_SECONDARY_TYPE, SET_BASE_PRIMARY_VALUE, SET_BASE_SECONDARY_VALUE, SWAP_BASE_VALUES, UPDATE_BASE_PRIMARY_VALUE, UPDATE_BASE_SECONDARY_VALUE } from '@/constants'

interface IsetBasePrimaryType {
  type: typeof SET_BASE_PRIMARY_TYPE;
  payload: string;
}

interface IsetBaseSecondaryType {
  type: typeof SET_BASE_SECONDARY_TYPE;
  payload: string;
}

interface IsetBasePrimaryValue {
  type: typeof SET_BASE_PRIMARY_VALUE;
  payload: string;
}

interface IsetBaseSecondaryValue {
  type: typeof SET_BASE_SECONDARY_VALUE;
  payload: string;
}

interface IupdateBaseSecondaryValue {
  type: typeof UPDATE_BASE_SECONDARY_VALUE;
  payload: string;
}

interface IupdateBasePrimaryValue {
  type: typeof UPDATE_BASE_PRIMARY_VALUE;
  payload: string;
}

interface IswapValues {
  type: typeof SWAP_BASE_VALUES;
}

export type ValuesActionTypes =
  | IsetBasePrimaryType
  | IsetBaseSecondaryType
  | IsetBasePrimaryValue
  | IsetBaseSecondaryValue
  | IupdateBaseSecondaryValue
  | IupdateBasePrimaryValue
  | IswapValues
