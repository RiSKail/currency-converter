import axios from 'axios'
import { BASE_API_URL } from './../constants/endpoints'

const instance = axios.create({
  baseURL: BASE_API_URL,
})

export const CurrenciesAPI = {
  getCourseList() {
    return instance.get(`/currencies`)
  },

  getCurrentCourse(code) {
    return instance.get(`/latest/${code}`)
  },

  getConversionCourse(baseCode, targetCode, value) {
    return instance.get(`/pair/${baseCode}/${targetCode}/${value}`)
  },
}