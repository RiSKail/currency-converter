import axios from 'axios'
import { BASE_API_URL, GEO_API_URL } from './../constants/endpoints'

const baseInstance = axios.create({
  baseURL: BASE_API_URL,
})

const geoInstance = axios.create({
  baseURL: GEO_API_URL,
})

export const CurrenciesAPI = {
  getCourseList () {
    return baseInstance.get('/currencies')
  },

  getDataListByBase (base) {
    return baseInstance.get(`/latest?from=${base}`)
  },
}

export const GeoAPI = {
  getCurrentCountry () {
    return geoInstance.get('/')
  },
}
