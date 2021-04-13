import React from 'react'
import 'jest-styled-components'

import { setDataListValues } from '@/actions'

import currenciesReducer from './currencies'

const state = {}

it('Data should be updated', () => {
  const action = setDataListValues({ USD: '1.23' })
  const newState = currenciesReducer(state, action)

  expect(newState.USD).toBe('1.23')
})
