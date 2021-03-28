import { SIGNIN_USER_DATA, SIGN_SUCCESS, SIGN_ERROR, SIGNOUT_SUCCESS, SIGNUP_SUCCESS, CLEAR_ERRORS } from '@/constants'
import { SET_AUTH_COUNTRY_INFO } from '@/constants/actions'
import { AuthActionTypes } from '@/types/actions'
import { IauthState } from '@/types/reducers'

const initialState = {
  authError: null,
}

const authReducer = (
  state = initialState,
  action: AuthActionTypes,
): IauthState => {
  switch (action.type) {
    case SIGN_ERROR:
      return {
        ...state,
        authError: action.err.message,
      }

    case SIGN_SUCCESS:
      return {
        ...state,
        authError: null,
      }

    case SIGNOUT_SUCCESS:
      return {
        authError: null,
      }

    case SIGNUP_SUCCESS:
      return {
        ...state,
        authError: null,
      }

    case CLEAR_ERRORS:
      return {
        ...state,
        authError: null,
      }

    case SIGNIN_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }

    case SET_AUTH_COUNTRY_INFO:
      return {
        ...state,
        country: action.payload,
      }

    default:
      return state
  }
}

export default authReducer
