import { SET_BASE_PRIMARY_TYPE, SET_BASE_SECONDARY_TYPE, UPDATE_BASE_PRIMARY_VALUE, UPDATE_BASE_SECONDARY_VALUE, SWAP_BASE_VALUES } from '@/constants'

const initialState = {
  primary: {
    type: 'RUB',
    value: '0',
  },
  secondary: {
    type: 'USD',
    value: '0',
  },
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_BASE_PRIMARY_TYPE: return {
      ...state,
      primary: {
        ...state.primary,
        type: action.payload,
      },
    }

    case SET_BASE_SECONDARY_TYPE: return {
      ...state,
      secondary: {
        ...state.secondary,
        type: action.payload,
      },
    }

    case UPDATE_BASE_PRIMARY_VALUE: return {
      ...state,
      primary: {
        ...state.primary,
        value: action.payload,
      },
    }

    case UPDATE_BASE_SECONDARY_VALUE: return {
      ...state,
      secondary: {
        ...state.secondary,
        value: action.payload,
      },
    }

    case SWAP_BASE_VALUES: return {
      primary: {
        ...state.primary,
        type: state.secondary.type,
      },
      secondary: {
        ...state.secondary,
        type: state.primary.type,
      },
    } 

    default: return state
  }
}