import { SET_LOCALE } from '@/constants'
import { InternalizationActionTypes } from '@/types/actions'

export const setLocale = (locale: string): InternalizationActionTypes => ({
  type: SET_LOCALE,
  payload: locale,
})
