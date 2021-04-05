import { SET_LOCALE } from '@/constants'

interface IsetLocale {
  type: typeof SET_LOCALE;
  payload: string;
}

export type InternalizationActionTypes = IsetLocale
