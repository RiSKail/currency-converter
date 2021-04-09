import { UPDATE_MAP_OPTIONS, SET_MAP_TYPE } from '@/constants'
import { ImapState } from '@/types/reducers'

interface IupdateMapOptions {
  type: typeof UPDATE_MAP_OPTIONS;
  payload: ImapState;
}

interface IsetMapType {
  type: typeof SET_MAP_TYPE;
  payload: string;
}

export type MapActionTypes = 
  | IupdateMapOptions
  | IsetMapType
