
import { IKeyableObj } from '@/types/otherTypes'

export interface IAuthState {
  authError: string | null,
  country?: IKeyableObj,
  lastName?: string,
  firstName?: string,
  initials?: string,
}
