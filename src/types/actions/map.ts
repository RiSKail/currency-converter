import { UPDATE_MAP_OPTIONS, SET_MAP_ENGINE } from '@/constants'
import { MapState } from '@/types/reducers'

interface UpdateMapOptions {
  type: typeof UPDATE_MAP_OPTIONS
  payload: MapState
}

interface SetMapEngine {
  type: typeof SET_MAP_ENGINE
  payload: string
}

export type MapActionTypes = UpdateMapOptions | SetMapEngine
