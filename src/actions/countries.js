import { UPDATE_COUNTRIES_DATA } from '@/constants'

export const updateCountriesData = data => ({
  type: UPDATE_COUNTRIES_DATA,
  payload: data,
})
