import { UPDATE_COUNTRIES_DATA } from '@/constants'
import { CountriesActionTypes } from '@/types/actionTypes'
import { ICountriesState } from '@/types/reducersTypes'

const initialState = null

const countriesReducer = (
  state = initialState,
  action: CountriesActionTypes,
): ICountriesState => {
  switch (action.type) {
    case UPDATE_COUNTRIES_DATA: return {
      ...action.payload,
    }

    default: return state
  }
}

export default countriesReducer
