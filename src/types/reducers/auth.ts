
import { IkeyableObj } from '@/types/otherTypes'

export interface IauthState {
  authError: string | null;
  country?: IkeyableObj;
  lastName?: string;
  firstName?: string;
  initials?: string;
}
