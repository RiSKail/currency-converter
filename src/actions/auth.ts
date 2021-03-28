import { SIGN_SUCCESS, SET_AUTH_COUNTRY_INFO, SIGN_ERROR, SIGNOUT_SUCCESS, SIGNUP_SUCCESS, SIGN_IN, SIGN_UP, SIGN_OUT, CLEAR_ERRORS, SIGNIN_USER_DATA } from '@/constants'
import { AuthActionTypes } from '@/types/actions'
import { IkeyableObj } from '@/types/otherTypes'

export const signIn = (
  value: IkeyableObj,
): AuthActionTypes => ({
  type: SIGN_IN,
  payload: value,
})

export const signInUserData = (
  value: IkeyableObj,
): AuthActionTypes => ({
  type: SIGNIN_USER_DATA,
  payload: value,
})

export const signUp = (
  value: IkeyableObj,
): AuthActionTypes => ({
  type: SIGN_UP,
  payload: value,
})

export const signOut = (): AuthActionTypes => ({
  type: SIGN_OUT,
})

export const signSuccess = (): AuthActionTypes => ({
  type: SIGN_SUCCESS,
})

export const clearErrors = (): AuthActionTypes => ({
  type: CLEAR_ERRORS,
})

export const signError = (
  value: Error,
): AuthActionTypes => ({
  type: SIGN_ERROR,
  err: value,
})

export const signUpSuccess = (): AuthActionTypes => ({
  type: SIGNUP_SUCCESS,
})

export const signOutSuccess = (): AuthActionTypes => ({
  type: SIGNOUT_SUCCESS,
})

export const setAuthCountryInfo = (
  data: IkeyableObj,
): AuthActionTypes => ({
  type: SET_AUTH_COUNTRY_INFO,
  payload: data,
})
