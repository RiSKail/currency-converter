import { combineReducers } from 'redux'

import internalization from './internalization'
import baseValues from './baseValues'
import dataList from './dataList'

export default combineReducers({
  internalization,
  baseValues,
  dataList,
})
