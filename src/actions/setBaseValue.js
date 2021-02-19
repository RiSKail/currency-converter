
import { SET_BASE_PRIMARY_VALUE, SET_BASE_SECONDARY_VALUE } from '@/constants'

export const setBasePrimaryValue = (value) => ({
  type: SET_BASE_PRIMARY_VALUE,
  payload: value,
})

export const setBaseSecondaryValue = (value) => ({
  type: SET_BASE_SECONDARY_VALUE,
  payload: value,
})