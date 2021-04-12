import { UPDATE_COUNTRIES_DATA } from '@/constants'
import { CountriesActionTypes } from '@/types/actions'
import { KeyableObj } from '@/types/otherTypes'

export const updateCountriesData = (data: KeyableObj): CountriesActionTypes => ({
  type: UPDATE_COUNTRIES_DATA,
  payload: data,
})
