
import { SET_BASE_PRIMARY_TYPE, SET_BASE_SECONDARY_TYPE, SET_BASE_PRIMARY_VALUE, SET_BASE_SECONDARY_VALUE, SWAP_BASE_VALUES, UPDATE_BASE_PRIMARY_VALUE, UPDATE_BASE_SECONDARY_VALUE } from './../constants'

export const setBasePrimaryType = (value: any) => ({
  type: SET_BASE_PRIMARY_TYPE,
  payload: value,
})

export const setBaseSecondaryType = (value: any) => ({
  type: SET_BASE_SECONDARY_TYPE,
  payload: value,
})

export const setBasePrimaryValue = (value: any) => ({
  type: SET_BASE_PRIMARY_VALUE,
  payload: value,
})

export const setBaseSecondaryValue = (value: any) => ({
  type: SET_BASE_SECONDARY_VALUE,
  payload: value,
})

export const updateBaseSecondaryValue = (value: any) => ({
  type: UPDATE_BASE_SECONDARY_VALUE,
  payload: value,
})

export const updateBasePrimaryValue = (value: any) => ({
  type: UPDATE_BASE_PRIMARY_VALUE,
  payload: value,
})

export const swapValues = () => ({
  type: SWAP_BASE_VALUES,
})
