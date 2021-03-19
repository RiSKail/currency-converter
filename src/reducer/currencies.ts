import { SET_DATA_LIST_VALUES } from '@/constants'

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_DATA_LIST_VALUES: return {
      ...action.payload,
    }

    default: return state
  }
}
