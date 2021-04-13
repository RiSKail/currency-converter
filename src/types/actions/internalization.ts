import { SET_LOCALE } from '@/constants'

interface SetLocale {
  type: typeof SET_LOCALE
  payload: string
}

export type InternalizationActionTypes = SetLocale
