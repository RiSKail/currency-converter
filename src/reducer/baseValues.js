import { SET_BASE_PRIMARY_VALUE, SET_BASE_SECONDARY_VALUE  } from '@/constants'

const initialState = {
  primary: 'USD',
  secondary: 'RUB',
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_BASE_PRIMARY_VALUE: return {
      ...state,
      primary: action.payload,
    }

    case SET_BASE_SECONDARY_VALUE: return {
      ...state,
      secondary: action.payload,
    }

    default: return state
  }
}