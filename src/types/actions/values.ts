import {
  SET_BASE_PRIMARY_TYPE,
  SET_BASE_SECONDARY_TYPE,
  SET_BASE_PRIMARY_VALUE,
  SET_BASE_SECONDARY_VALUE,
  SWAP_BASE_VALUES,
  UPDATE_BASE_PRIMARY_VALUE,
  UPDATE_BASE_SECONDARY_VALUE,
} from '@/constants'

interface SetBasePrimaryType {
  type: typeof SET_BASE_PRIMARY_TYPE
  payload: string
}

interface SetBaseSecondaryType {
  type: typeof SET_BASE_SECONDARY_TYPE
  payload: string
}

interface SetBasePrimaryValue {
  type: typeof SET_BASE_PRIMARY_VALUE
  payload: string
}

interface SetBaseSecondaryValue {
  type: typeof SET_BASE_SECONDARY_VALUE
  payload: string
}

interface UpdateBaseSecondaryValue {
  type: typeof UPDATE_BASE_SECONDARY_VALUE
  payload: string
}

interface UpdateBasePrimaryValue {
  type: typeof UPDATE_BASE_PRIMARY_VALUE
  payload: string
}

interface SwapValues {
  type: typeof SWAP_BASE_VALUES
}

export type ValuesActionTypes =
  | SetBasePrimaryType
  | SetBaseSecondaryType
  | SetBasePrimaryValue
  | SetBaseSecondaryValue
  | UpdateBaseSecondaryValue
  | UpdateBasePrimaryValue
  | SwapValues
