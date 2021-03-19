import { SET_LOCALE, ENGLISH } from '@/constants'

const initialState = {
  active: ENGLISH,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOCALE: return {
      ...state,
      active: action.payload,
    }

    default: return state
  }
}
