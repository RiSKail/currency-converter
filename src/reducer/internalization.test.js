import React from 'react'
import { ENGLISH, RUSSIAN } from '@/constants'
import 'jest-styled-components'
import { setLocale } from '@/actions'
import internalizationReducer from './internalization'

const state = {
  active: ENGLISH,
}

it('Language should be updated', () => {
  const action = setLocale(RUSSIAN)
  const newState = internalizationReducer(state, action)

  expect(newState.active).toBe(RUSSIAN)
})