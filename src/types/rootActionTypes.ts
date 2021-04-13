import {
  AuthActionTypes,
  CountriesActionTypes,
  CurrenciesActionTypes,
  InternalizationActionTypes,
  MapActionTypes,
  ValuesActionTypes,
} from './actions'

export type RootAction =
  | AuthActionTypes
  | CountriesActionTypes
  | CurrenciesActionTypes
  | InternalizationActionTypes
  | MapActionTypes
  | ValuesActionTypes
