import { UPDATE_COUNTRIES_DATA } from './../constants'

export const updateCountriesData = (data: any) => ({
  type: UPDATE_COUNTRIES_DATA,
  payload: data,
})
