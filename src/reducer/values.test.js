import React from 'react'
import { setBasePrimaryType, setBaseSecondaryType, updateBasePrimaryValue, updateBaseSecondaryValue } from '@/actions'
import valuesReducer from './values'

const state = {
  primary: {
    type: 'RUB',
    value: '0.0000',
  },
  secondary: {
    type: 'USD',
    value: '0.0000',
  },
}

it('Primary type should be updated', () => {
  const action = setBasePrimaryType("EUR")
  const newState = valuesReducer(state, action)

  expect(newState.primary.type).toBe("EUR")
})

it('Secondary type should be updated', () => {
  const action = setBaseSecondaryType("EUR")
  const newState = valuesReducer(state, action)

  expect(newState.secondary.type).toBe("EUR")
})

it('Primary value should be updated', () => {
  const action = updateBasePrimaryValue("1")
  const newState = valuesReducer(state, action)

  expect(newState.primary.value).toBe("1")
})

it('Secondary value should be updated', () => {
  const action = updateBaseSecondaryValue("1")
  const newState = valuesReducer(state, action)

  expect(newState.secondary.value).toBe("1")
})