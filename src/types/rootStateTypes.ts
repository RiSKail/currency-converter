import { KeyableObj } from '@/types/otherTypes'
import {
  CountriesState,
  AuthState,
  InternalizationState,
  CurrenciesState,
  ValuesState,
  MapState,
} from './reducers'

export interface RootState {
  internalization: InternalizationState
  values: ValuesState
  currencies: CurrenciesState
  countries: CountriesState
  map: MapState
  auth: AuthState
  firebase: KeyableObj
}
