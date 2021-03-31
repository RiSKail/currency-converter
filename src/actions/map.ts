import { UPDATE_MAP_OPTIONS } from '@/constants'
import { MapActionTypes } from '@/types/actions'
import { IkeyableObj } from '@/types/otherTypes'

export const updateMapOptions = (
  value: IkeyableObj,
): MapActionTypes => ({
  type: UPDATE_MAP_OPTIONS,
  payload: value,
})
