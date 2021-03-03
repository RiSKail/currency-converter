import axios from 'axios'
import { BASE_API_URL, GEO_API_URL, GET_COURSE_LIST, GET_DATA_LIST_BY_BASE, GET_CURRENT_COUNTRY } from './../constants/endpoints'

const baseInstance = axios.create({
  baseURL: BASE_API_URL,
})

const geoInstance = axios.create({
  baseURL: GEO_API_URL,
})

export const CurrenciesAPI = {
  getCourseList () {
    return baseInstance.get(GET_COURSE_LIST)
  },

  getDataListByBase (base) {
    return baseInstance.get(GET_DATA_LIST_BY_BASE + base)
  },
}

export const GeoAPI = {
  getCurrentCountry () {
    return geoInstance.get(GET_CURRENT_COUNTRY)
  },
}
