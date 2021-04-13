export const BASE_API_URL = 'https://api.frankfurter.app'
export const GET_DATA_LIST_BY_USD = '/latest?from=USD'

export const GEO_API_URL = 'https://api.sypexgeo.net'
export const GET_CURRENT_COUNTRY = '/'

export const COUNTRIES_API_URL = 'https://restcountries.eu/rest/v2'
export const GET_COUNTRY_INFO_BY_NAME = '/name/'
export const GET_ALL_COUNTRIES_INFO = '/all?fields=name;flag;alpha3Code;currencies;latlng'

export const LEAFLET_THEME_URL =
  'https://cartocdn_{s}.global.ssl.fastly.net/base-flatblue/{z}/{x}/{y}.png'
export const GOOGLE_MAP_URL = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`
