import { UPDATE_COUNTRIES_DATA } from '@/constants'
import { IkeyableObj } from '@/types/otherTypes'

interface IupdateCountriesData {
  type: typeof UPDATE_COUNTRIES_DATA;
  payload: IkeyableObj;
}

export type CountriesActionTypes = IupdateCountriesData
