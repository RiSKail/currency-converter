import axios from 'axios'
import { BASE_API_URL, GEO_API_URL, GET_COUNTRY_INFO_BY_NAME, GET_DATA_LIST_BY_USD, GET_CURRENT_COUNTRY, COUNTRIES_API_URL, GET_ALL_COUNTRIES_INFO } from '@/constants/endpoints'

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
  getDataList () {
    return baseInstance.get(GET_DATA_LIST_BY_USD)
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

  getCountryInfoByName (name: string) {
    return countriesInstance.get(GET_COUNTRY_INFO_BY_NAME + name)
  },
}
