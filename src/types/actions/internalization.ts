import { SET_LOCALE } from '@/constants'

interface ISetLocale {
  type: typeof SET_LOCALE,
  payload: string,
}

export type InternalizationActionTypes = ISetLocale
