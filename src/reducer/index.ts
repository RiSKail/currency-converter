import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'

import internalization from './internalization'
import values from './values'
import currencies from './currencies'
import auth from './auth'
import countries from './countries'

export default combineReducers({
  internalization,
  values,
  currencies,
  countries,
  auth,
  firebase: firebaseReducer,
})
