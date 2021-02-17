import { SET_LOCALE } from '@/constants'

export const setLocale = locale => ({
  payload: locale,
  type: SET_LOCALE,
})
