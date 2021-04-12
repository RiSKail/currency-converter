import {
  SET_BASE_PRIMARY_TYPE,
  SET_BASE_SECONDARY_TYPE,
  SET_BASE_PRIMARY_VALUE,
  SET_BASE_SECONDARY_VALUE,
  SWAP_BASE_VALUES,
  UPDATE_BASE_PRIMARY_VALUE,
  UPDATE_BASE_SECONDARY_VALUE,
} from '@/constants'
import { ValuesActionTypes } from '@/types/actions'

export const setBasePrimaryType = (value: string): ValuesActionTypes => ({
  type: SET_BASE_PRIMARY_TYPE,
  payload: value,
})

export const setBaseSecondaryType = (value: string): ValuesActionTypes => ({
  type: SET_BASE_SECONDARY_TYPE,
  payload: value,
})

export const setBasePrimaryValue = (value: string): ValuesActionTypes => ({
  type: SET_BASE_PRIMARY_VALUE,
  payload: value,
})

export const setBaseSecondaryValue = (value: string): ValuesActionTypes => ({
  type: SET_BASE_SECONDARY_VALUE,
  payload: value,
})

export const updateBaseSecondaryValue = (value: string): ValuesActionTypes => ({
  type: UPDATE_BASE_SECONDARY_VALUE,
  payload: value,
})

export const updateBasePrimaryValue = (value: string): ValuesActionTypes => ({
  type: UPDATE_BASE_PRIMARY_VALUE,
  payload: value,
})

export const swapValues = (): ValuesActionTypes => ({
  type: SWAP_BASE_VALUES,
})
