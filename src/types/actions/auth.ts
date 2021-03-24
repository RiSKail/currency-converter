import { LOGIN_SUCCESS, SET_AUTH_COUNTRY_INFO, LOGIN_ERROR, SIGNOUT_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR, SIGN_IN, SIGN_UP, SIGN_OUT, CLEAR_ERRORS, SIGNIN_USER_DATA } from '@/constants'
import { IKeyableObj } from '@/types/otherTypes'

interface ISignIn {
  type: typeof SIGN_IN,
  payload: IKeyableObj,
}

interface ISignInUserData {
  type: typeof SIGNIN_USER_DATA,
  payload: IKeyableObj,
}

interface ISignUp {
  type: typeof SIGN_UP,
  payload: IKeyableObj,
}

interface ISignOut {
  type: typeof SIGN_OUT,
}

interface ILoginSuccess {
  type: typeof LOGIN_SUCCESS,
}

interface IClearErrors {
  type: typeof CLEAR_ERRORS,
}

interface ILoginError {
  type: typeof LOGIN_ERROR,
  err: Error,
}

interface ISignUpSuccess {
  type: typeof SIGNUP_SUCCESS,
}

interface ISignUpError {
  type: typeof SIGNUP_ERROR,
  err: Error,
}

interface ISignOutSuccess {
  type: typeof SIGNOUT_SUCCESS,
}

interface ISetAuthCountryInfo {
  type: typeof SET_AUTH_COUNTRY_INFO,
  payload: IKeyableObj,
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
