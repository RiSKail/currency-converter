import { UPDATE_MAP_OPTIONS, SET_MAP_ENGINE } from '@/constants'
import { MapActionTypes } from '@/types/actions'
import { MapState } from '@/types/reducers'

const initialState = {
  center: [0, 0],
  pathOptions: { fillOpacity: 0 },
  minZoom: 2,
  zoom: 5,
  engine: 'Leaflet',
}

const mapReducer = (state = initialState, action: MapActionTypes): MapState => {
  switch (action.type) {
    case UPDATE_MAP_OPTIONS:
      return {
        ...action.payload,
      }
    case SET_MAP_ENGINE:
      return {
        ...state,
        engine: action.payload,
      }

    default:
      return state
  }
}

export default mapReducer
