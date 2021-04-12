import {
  SIGN_SUCCESS,
  SET_AUTH_COUNTRY_INFO,
  SIGN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  CLEAR_ERRORS,
  SIGNIN_USER_DATA,
} from '@/constants'
import { KeyableObj } from '@/types/otherTypes'

interface SignIn {
  type: typeof SIGN_IN
  payload: KeyableObj
}

interface SignInUserData {
  type: typeof SIGNIN_USER_DATA
  payload: KeyableObj
}

interface SignUp {
  type: typeof SIGN_UP
  payload: KeyableObj
}

interface SignOut {
  type: typeof SIGN_OUT
}

interface SignInSuccess {
  type: typeof SIGN_SUCCESS
}

interface ClearErrors {
  type: typeof CLEAR_ERRORS
}

interface SignError {
  type: typeof SIGN_ERROR
  err: Error
}

interface SignUpSuccess {
  type: typeof SIGNUP_SUCCESS
}

interface SignOutSuccess {
  type: typeof SIGNOUT_SUCCESS
}

interface SetAuthCountryInfo {
  type: typeof SET_AUTH_COUNTRY_INFO
  payload: KeyableObj
}

export type AuthActionTypes =
  | SignIn
  | SignInUserData
  | SignUp
  | SignOut
  | SignInSuccess
  | ClearErrors
  | SignError
  | SignUpSuccess
  | SignOutSuccess
  | SetAuthCountryInfo
