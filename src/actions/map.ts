import { UPDATE_MAP_OPTIONS, SET_MAP_TYPE } from '@/constants'
import { MapActionTypes } from '@/types/actions'
import { ImapState } from '@/types/reducers'

export const updateMapOptions = (
  value: ImapState,
): MapActionTypes => ({
  type: UPDATE_MAP_OPTIONS,
  payload: value,
})

export const setMapType = (
  value: string,
): MapActionTypes => ({
  type: SET_MAP_TYPE,
  payload: value,
})
