import { all } from 'redux-saga/effects'

import authWatcher from './auth'
import currenciesWatcher from './currencies'

export default function * (): Generator<unknown, void, unknown> {
  yield all([
    authWatcher(),
    currenciesWatcher(),
  ])
}
