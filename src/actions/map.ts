import { UPDATE_MAP_OPTIONS, SET_MAP_ENGINE } from '@/constants'
import { MapActionTypes } from '@/types/actions'
import { MapState } from '@/types/reducers'

export const updateMapOptions = (value: MapState): MapActionTypes => ({
  type: UPDATE_MAP_OPTIONS,
  payload: value,
})

export const setMapEngine = (value: string): MapActionTypes => ({
  type: SET_MAP_ENGINE,
  payload: value,
})
