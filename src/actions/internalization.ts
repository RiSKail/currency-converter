import { SET_LOCALE } from './../constants'

export const setLocale = (locale: any) => ({
  payload: locale,
  type: SET_LOCALE,
})
