import React from 'react'
import 'jest-styled-components'
import { updateCountriesData } from '@/actions'
import countriesReducer from './countries'

const state = {}

it('Data should be updated', () => {
  const action = updateCountriesData({ name: "Belarus" })
  const newState = countriesReducer(state, action)

  expect(newState.name).toBe("Belarus")
})