import React from 'react'
import 'jest-styled-components'

import countriesReducer from './countries'
import { updateCountriesData } from '@/actions'

const state = {}

it('Data should be updated', () => {
  const action = updateCountriesData({ name: 'Belarus' })
  const newState = countriesReducer(state, action)

  expect(newState.name).toBe('Belarus')
})
