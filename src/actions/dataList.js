import { UPDATE_DATA_LIST_VALUES } from '@/constants'

export const updateDataListValues = (data) => ({
  type: UPDATE_DATA_LIST_VALUES,
  payload: data,
})