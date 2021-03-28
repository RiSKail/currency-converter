import { SIGN_SUCCESS, SET_AUTH_COUNTRY_INFO, SIGN_ERROR, SIGNOUT_SUCCESS, SIGNUP_SUCCESS, SIGN_IN, SIGN_UP, SIGN_OUT, CLEAR_ERRORS, SIGNIN_USER_DATA } from '@/constants'
import { IkeyableObj } from '@/types/otherTypes'

interface IsignIn {
  type: typeof SIGN_IN;
  payload: IkeyableObj;
}

interface IsignInUserData {
  type: typeof SIGNIN_USER_DATA;
  payload: IkeyableObj;
}

interface IsignUp {
  type: typeof SIGN_UP;
  payload: IkeyableObj;
}

interface IsignOut {
  type: typeof SIGN_OUT;
}

interface IsignInSuccess {
  type: typeof SIGN_SUCCESS;
}

interface IclearErrors {
  type: typeof CLEAR_ERRORS;
}

interface IsignError {
  type: typeof SIGN_ERROR;
  err: Error;
}

interface IsignUpSuccess {
  type: typeof SIGNUP_SUCCESS;
}

interface IsignOutSuccess {
  type: typeof SIGNOUT_SUCCESS;
}

interface IsetAuthCountryInfo {
  type: typeof SET_AUTH_COUNTRY_INFO;
  payload: IkeyableObj;
}

export type AuthActionTypes =
  | IsignIn
  | IsignInUserData
  | IsignUp
  | IsignOut
  | IsignInSuccess
  | IclearErrors
  | IsignError
  | IsignUpSuccess
  | IsignOutSuccess
  | IsetAuthCountryInfo
