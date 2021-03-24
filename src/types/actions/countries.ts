import { UPDATE_COUNTRIES_DATA } from '@/constants'
import { IKeyableObj } from '@/types/otherTypes'

interface IUpdateCountriesData {
  type: typeof UPDATE_COUNTRIES_DATA,
  payload: IKeyableObj,
}

export type CountriesActionTypes = IUpdateCountriesData
