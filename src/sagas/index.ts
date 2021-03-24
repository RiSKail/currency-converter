import { all } from 'redux-saga/effects'
import authWatcher from './auth'
import currenciesWatcher from './currencies'

export default function * () {
  yield all([
    authWatcher(),
    currenciesWatcher(),
  ])
}
