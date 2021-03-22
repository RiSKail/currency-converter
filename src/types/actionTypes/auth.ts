import { LOGIN_SUCCESS, SET_AUTH_COUNTRY_INFO, LOGIN_ERROR, SIGNOUT_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR, SIGN_IN, SIGN_UP, SIGN_OUT, CLEAR_ERRORS, SIGNIN_USER_DATA } from '@/constants'

interface ISignIn {
  type: typeof SIGN_IN,
  payload: any,
}

interface ISignInUserData {
  type: typeof SIGNIN_USER_DATA,
  payload: any,
}

interface ISignUp {
  type: typeof SIGN_UP,
  payload: any,
}

interface ISignOut {
  type: typeof SIGN_OUT,
  payload?: any,
}

interface ILoginSuccess {
  type: typeof LOGIN_SUCCESS,
}

interface IClearErrors {
  type: typeof CLEAR_ERRORS,
}

interface ILoginError {
  type: typeof LOGIN_ERROR,
  err: any,
}

interface ISignUpSuccess {
  type: typeof SIGNUP_SUCCESS,
}

interface ISignUpError {
  type: typeof SIGNUP_ERROR,
  err: any,
}

interface ISignOutSuccess {
  type: typeof SIGNOUT_SUCCESS,
}

interface ISetAuthCountryInfo {
  type: typeof SET_AUTH_COUNTRY_INFO,
  payload: any,
}

export type AuthActionTypes =
  | ISignIn
  | ISignInUserData
  | ISignUp
  | ISignOut
  | ILoginSuccess
  | IClearErrors
  | ILoginError
  | ISignUpSuccess
  | ISignUpError
  | ISignOutSuccess
  | ISetAuthCountryInfo
