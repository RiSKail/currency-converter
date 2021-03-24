import { SET_DATA_LIST_VALUES } from '@/constants'
import { CurrenciesActionTypes } from '@/types/actions'
import { ICurrenciesState } from '@/types/reducers'

const initialState = {}

const currenciesReducer = (
  state = initialState,
  action: CurrenciesActionTypes,
): ICurrenciesState => {
  switch (action.type) {
    case SET_DATA_LIST_VALUES: return {
      ...action.payload,
    }

    default: return state
  }
}

export default currenciesReducer
