import axios from 'axios'
import { BASE_API_URL } from './../constants/endpoints'

const instance = axios.create({
  baseURL: BASE_API_URL,
})

export const CurrenciesAPI = {
  getCourseList() {
    return instance.get(`/currencies`)
  },

  getDataListByBase(base) {
    return instance.get(`/latest?from=${base}`)
  },
}