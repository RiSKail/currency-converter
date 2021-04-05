import {
  IcountriesState,
  IauthState,
  IinternalizationState,
  IcurrenciesState,
  IvaluesState,
  ImapState,
} from './reducers'
import { IkeyableObj } from '@/types/otherTypes'

export interface IrootState {
  internalization: IinternalizationState;
  values: IvaluesState;
  currencies: IcurrenciesState;
  countries: IcountriesState;
  map: ImapState;
  auth: IauthState;
  firebase: IkeyableObj;
}
