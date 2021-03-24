import { LOGIN_SUCCESS, SET_AUTH_COUNTRY_INFO, LOGIN_ERROR, SIGNOUT_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR, SIGN_IN, SIGN_UP, SIGN_OUT, CLEAR_ERRORS, SIGNIN_USER_DATA } from '@/constants'
import { AuthActionTypes } from '@/types/actions'
import { IKeyableObj } from '@/types/otherTypes'

export const signIn = (
  value: IKeyableObj,
): AuthActionTypes => ({
  type: SIGN_IN,
  payload: value,
})

export const signInUserData = (
  value: IKeyableObj,
): AuthActionTypes => ({
  type: SIGNIN_USER_DATA,
  payload: value,
})

export const signUp = (
  value: IKeyableObj,
): AuthActionTypes => ({
  type: SIGN_UP,
  payload: value,
})

export const signOut = (): AuthActionTypes => ({
  type: SIGN_OUT,
})

export const loginSuccess = (): AuthActionTypes => ({
  type: LOGIN_SUCCESS,
})

export const clearErrors = (): AuthActionTypes => ({
  type: CLEAR_ERRORS,
})

export const loginError = (
  value: Error,
): AuthActionTypes => ({
  type: LOGIN_ERROR,
  err: value,
})

export const signUpSuccess = (): AuthActionTypes => ({
  type: SIGNUP_SUCCESS,
})

export const signUpError = (
  value: Error,
): AuthActionTypes => ({
  type: SIGNUP_ERROR,
  err: value,
})

export const signOutSuccess = (): AuthActionTypes => ({
  type: SIGNOUT_SUCCESS,
})

export const setAuthCountryInfo = (
  data: IKeyableObj,
): AuthActionTypes => ({
  type: SET_AUTH_COUNTRY_INFO,
  payload: data,
})
