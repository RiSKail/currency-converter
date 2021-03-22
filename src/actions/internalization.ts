import { SET_LOCALE } from '@/constants'
import { InternalizationActionTypes } from '@/types/actionTypes'

export const setLocale = (
  locale: any,
): InternalizationActionTypes => ({
  type: SET_LOCALE,
  payload: locale,
})
