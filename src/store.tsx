import { applyMiddleware, createStore, compose, Store } from 'redux'
import reduxLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootSaga from '@/sagas'
import reducer from '@/reducer'

let store: Store | null = null

const sagaMiddleware = createSagaMiddleware()

const createDevelopmentStore = (): Store =>
  createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware, reduxLogger)))

const createProductionStore = (): Store =>
  createStore(reducer, compose(applyMiddleware(sagaMiddleware)))

export const getStore = (): Store => {
  if (!store) {
    store =
      process.env.NODE_ENV === 'development' ? createDevelopmentStore() : createProductionStore()

    sagaMiddleware.run(rootSaga)
  }

  return store
}
