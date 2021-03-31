import React from 'react'
import 'jest-styled-components'
import { setAuthCountryInfo, signError, signInUserData, signOutSuccess } from '@/actions'
import authReducer from './auth'

const state = {
  name: "",
  lastName: "",
  authError: null,
}

it('Country info should be added', () => {
  const action = setAuthCountryInfo({ name: "Belarus" })
  const newState = authReducer(state, action)

  expect(newState.country.name).toBe("Belarus")
})

it('Text of error should be added', () => {
  const action = signError({ message: "Error" })
  const newState = authReducer(state, action)

  expect(newState.authError).toBe("Error")
})

it('User info should be added', () => {
  const action = signInUserData({ name: "Test" })
  const newState = authReducer(state, action)

  expect(newState.name).toBe("Test")
})

it('Sign out should be success', () => {
  const action = signOutSuccess()
  const newState = authReducer(state, action)

  expect(Object.keys(newState).length).toBe(1)
})
