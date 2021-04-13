import { KeyableObj } from '@/types/otherTypes'

export interface AuthState {
  authError: string | null
  country?: KeyableObj
  lastName?: string
  firstName?: string
  initials?: string
}
