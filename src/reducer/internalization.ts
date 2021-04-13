import { SET_LOCALE, ENGLISH } from '@/constants'
import { InternalizationActionTypes } from '@/types/actions'
import { InternalizationState } from '@/types/reducers'

const initialState = {
  active: ENGLISH,
}

const internalizationReducer = (
  state = initialState,
  action: InternalizationActionTypes
): InternalizationState => {
  switch (action.type) {
    case SET_LOCALE:
      return {
        ...state,
        active: action.payload,
      }

    default:
      return state
  }
}

export default internalizationReducer
