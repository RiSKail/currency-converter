import { UPDATE_MAP_OPTIONS } from '@/constants'
import { ImapState } from '@/types/reducers'

interface IupdateMapOptions {
  type: typeof UPDATE_MAP_OPTIONS;
  payload: ImapState;
}

export type MapActionTypes = IupdateMapOptions
