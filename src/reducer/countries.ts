import { UPDATE_COUNTRIES_DATA } from '@/constants'

const initialState = null

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_COUNTRIES_DATA: return {
      ...action.payload,
    }

    default: return state
  }
}
