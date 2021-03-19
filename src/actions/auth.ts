import { LOGIN_SUCCESS, SET_AUTH_COUNTRY_INFO, LOGIN_ERROR, SIGNOUT_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR, SIGN_IN, SIGN_UP, SIGN_OUT, CLEAR_ERRORS, SIGNIN_USER_DATA } from './../constants'

export const signIn = (value: any) => ({
  type: SIGN_IN,
  payload: value,
})

export const signInUserData = (value: any) => ({
  type: SIGNIN_USER_DATA,
  payload: value,
})

export const signUp = (value: any) => ({
  type: SIGN_UP,
  payload: value,
})

export const signOut = (value: any) => ({
  type: SIGN_OUT,
  payload: value,
})

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
})

export const loginError = (value: any) => ({
  type: LOGIN_ERROR,
  err: value,
})

export const signUpSuccess = () => ({
  type: SIGNUP_SUCCESS,
})

export const signUpError = (value: any) => ({
  type: SIGNUP_ERROR,
  err: value,
})

export const signOutSuccess = () => ({
  type: SIGNOUT_SUCCESS,
})

export const setAuthCountryInfo = (data: any) => ({
  type: SET_AUTH_COUNTRY_INFO,
  payload: data,
})
