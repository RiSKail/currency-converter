import { SET_LOCALE } from '@/constants'

interface ISetLocale {
  type: typeof SET_LOCALE,
  payload: any,
}

export type InternalizationActionTypes = ISetLocale
