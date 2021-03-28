import { UPDATE_COUNTRIES_DATA } from '@/constants'
import { CountriesActionTypes } from '@/types/actions'
import { IkeyableObj } from '@/types/otherTypes'

export const updateCountriesData = (
  data: IkeyableObj,
): CountriesActionTypes => ({
  type: UPDATE_COUNTRIES_DATA,
  payload: data,
})
