import { UPDATE_COUNTRIES_DATA } from '@/constants'
import { CountriesActionTypes } from '@/types/actions'
import { IKeyableObj } from '@/types/otherTypes'

export const updateCountriesData = (
  data: IKeyableObj,
): CountriesActionTypes => ({
  type: UPDATE_COUNTRIES_DATA,
  payload: data,
})
