import axios from 'axios'
import { BASE_API_URL, GEO_API_URL, GET_COURSE_LIST, GET_COUNTRY_INFO_BY_NAME, GET_DATA_LIST_BY_BASE, GET_CURRENT_COUNTRY, COUNTRIES_API_URL, GET_ALL_COUNTRIES_INFO } from './../constants/endpoints'

const baseInstance = axios.create({
  baseURL: BASE_API_URL,
})

const geoInstance = axios.create({
  baseURL: GEO_API_URL,
})

const countriesInstance = axios.create({
  baseURL: COUNTRIES_API_URL,
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

export const CountriesAPI = {
  getAllCountriesInfo () {
    return countriesInstance.get(GET_ALL_COUNTRIES_INFO)
  },

  getCountryInfoByName (name) {
    return countriesInstance.get(GET_COUNTRY_INFO_BY_NAME + name)
  },
}
