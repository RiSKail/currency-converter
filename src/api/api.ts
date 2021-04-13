import axios, { AxiosResponse } from 'axios'

import {
  BASE_API_URL,
  GEO_API_URL,
  GET_COUNTRY_INFO_BY_NAME,
  GET_DATA_LIST_BY_USD,
  GET_CURRENT_COUNTRY,
  COUNTRIES_API_URL,
  GET_ALL_COUNTRIES_INFO,
} from '@/constants/endpoints'

const currenciesAxiosInstance = axios.create({
  baseURL: BASE_API_URL,
})

const geoAxiosInstance = axios.create({
  baseURL: GEO_API_URL,
})

const countriesAxiosInstance = axios.create({
  baseURL: COUNTRIES_API_URL,
})

export const CurrenciesAPI = {
  getDataList(): Promise<AxiosResponse> {
    return currenciesAxiosInstance.get(GET_DATA_LIST_BY_USD)
  },
}

export const GeoAPI = {
  getCurrentCountry(): Promise<AxiosResponse> {
    return geoAxiosInstance.get(GET_CURRENT_COUNTRY)
  },
}

export const CountriesAPI = {
  getAllCountriesInfo(): Promise<AxiosResponse> {
    return countriesAxiosInstance.get(GET_ALL_COUNTRIES_INFO)
  },

  getCountryInfoByName(name: string): Promise<AxiosResponse> {
    return countriesAxiosInstance.get(GET_COUNTRY_INFO_BY_NAME + name)
  },
}
