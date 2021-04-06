import React from 'react'
import 'jest-styled-components'

import internalizationReducer from './internalization'
import { setLocale } from '@/actions'
import { ENGLISH, RUSSIAN } from '@/constants'

const state = {
  active: ENGLISH,
}

it('Language should be updated', () => {
  const action = setLocale(RUSSIAN)
  const newState = internalizationReducer(state, action)

  expect(newState.active).toBe(RUSSIAN)
})
