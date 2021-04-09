import { UPDATE_MAP_OPTIONS, SET_MAP_TYPE } from '@/constants'
import { MapActionTypes } from '@/types/actions'
import { ImapState } from '@/types/reducers'

const initialState = {
  center: [0, 0],
  pathOptions: { fillOpacity: 0 },
  minZoom: 2,
  zoom: 5,
  type: 'Leaflet',
}

const mapReducer = (
  state = initialState,
  action: MapActionTypes,
): ImapState => {
  switch (action.type) {
    case UPDATE_MAP_OPTIONS: return {
      ...action.payload,
    }
    case SET_MAP_TYPE: return {
      ...state,
      type: action.payload,
    }

    default: return state
  }
}

export default mapReducer
