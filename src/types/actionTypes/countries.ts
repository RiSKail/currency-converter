import { UPDATE_COUNTRIES_DATA } from '@/constants'

interface IUpdateCountriesData {
  type: typeof UPDATE_COUNTRIES_DATA,
  payload: any,
}

export type CountriesActionTypes = IUpdateCountriesData
