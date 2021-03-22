import { UPDATE_COUNTRIES_DATA } from '@/constants'
import { CountriesActionTypes } from '@/types/actionTypes'

export const updateCountriesData = (
  data: any,
): CountriesActionTypes => ({
  type: UPDATE_COUNTRIES_DATA,
  payload: data,
})
