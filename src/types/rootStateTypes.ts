import {
  ICountriesState,
  IAuthState,
  IInternalizationState,
  ICurrenciesState,
  IValuesState,
} from './reducers'
import { IKeyableObj } from '@/types/otherTypes'

export interface IRootState {
  internalization: IInternalizationState,
  values: IValuesState,
  currencies: ICurrenciesState,
  countries: ICountriesState;
  auth: IAuthState,
  firebase: IKeyableObj
}
