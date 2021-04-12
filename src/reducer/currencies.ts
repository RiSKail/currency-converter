import { SET_DATA_LIST_VALUES } from '@/constants'
import { CurrenciesActionTypes } from '@/types/actions'
import { CurrenciesState } from '@/types/reducers'

const initialState = {}

const currenciesReducer = (
  state = initialState,
  action: CurrenciesActionTypes
): CurrenciesState => {
  switch (action.type) {
    case SET_DATA_LIST_VALUES:
      return {
        ...action.payload,
      }

    default:
      return state
  }
}

export default currenciesReducer
