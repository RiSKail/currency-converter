import { LOGIN_SUCCESS, SET_AUTH_COUNTRY_INFO, LOGIN_ERROR, SIGNOUT_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNIN, SIGNUP, SIGNOUT, CLEAR_ERRORS, SIGNIN_USER_DATA } from '@/constants'

export const signIn = value => ({
  type: SIGNIN,
  payload: value,
})

export const signInUserData = value => ({
  type: SIGNIN_USER_DATA,
  payload: value,
})

export const signUp = value => ({
  type: SIGNUP,
  payload: value,
})

export const signOut = value => ({
  type: SIGNOUT,
  payload: value,
})

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
})

export const loginError = value => ({
  type: LOGIN_ERROR,
  err: value,
})

export const signUpSuccess = () => ({
  type: SIGNUP_SUCCESS,
})

export const signUpError = value => ({
  type: SIGNUP_ERROR,
  err: value,
})

export const signOutSuccess = () => ({
  type: SIGNOUT_SUCCESS,
})

export const setAuthCountryInfo = data => ({
  type: SET_AUTH_COUNTRY_INFO,
  payload: data,
})
