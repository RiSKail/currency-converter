import {
  ICountriesState,
  IAuthState,
  IInternalizationState,
  ICurrenciesState,
  IValuesState,
} from './reducersTypes'

export interface IState {
  internalization: IInternalizationState,
  values: IValuesState,
  currencies: ICurrenciesState,
  countries: ICountriesState;
  auth: IAuthState,
  firebase?: any
}

export type IRootState =
  | IState
  | null
