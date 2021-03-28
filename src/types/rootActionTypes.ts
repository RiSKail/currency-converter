import {
  AuthActionTypes,
  CountriesActionTypes,
  CurrenciesActionTypes,
  InternalizationActionTypes,
  MapActionTypes,
  ValuesActionTypes,
} from './actions'

export type IrootAction = 
  | AuthActionTypes
  | CountriesActionTypes
  | CurrenciesActionTypes
  | InternalizationActionTypes
  | MapActionTypes
  | ValuesActionTypes
