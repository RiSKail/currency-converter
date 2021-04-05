import { UPDATE_COUNTRIES_DATA } from '@/constants'
import { CountriesActionTypes } from '@/types/actions'
import { IcountriesState } from '@/types/reducers'

const initialState = {}

const countriesReducer = (
  state = initialState,
  action: CountriesActionTypes,
): IcountriesState => {
  switch (action.type) {
    case UPDATE_COUNTRIES_DATA:
      return {
        ...action.payload,
      }

    default: return state
  }
}

export default countriesReducer
