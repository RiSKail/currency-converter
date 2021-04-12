import { UPDATE_COUNTRIES_DATA } from '@/constants'
import { KeyableObj } from '@/types/otherTypes'

interface UpdateCountriesData {
  type: typeof UPDATE_COUNTRIES_DATA
  payload: KeyableObj
}

export type CountriesActionTypes = UpdateCountriesData
