import React from 'react'
import 'jest-styled-components'
import configureMockStore from 'redux-mock-store'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import BaseComponentTestWrapper from '@/components/wrappers/BaseComponentTestWrapper'

import { nop } from '@/utils/other'

import ConvertBlock from './container'

const mockStore = configureMockStore()
let container = null

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

const store = mockStore({
  internalization: {
    active: 'en',
  },
  values: {
    primary: {
      type: 'USD',
      value: '1',
    },
    secondary: {
      type: 'EUR',
      value: '1',
    },
  },
})

it('ConvertBlock primary is render with values', () => {
  act(() => {
    render(
      <BaseComponentTestWrapper mockStore={store}>
        <ConvertBlock type="primary" storedValue={['USD', 'EUR']} setValue={nop} />
      </BaseComponentTestWrapper>,
      container
    )
  })

  const input = container.querySelector('input')
  expect(input.value).toBe('1')
})

it('ConvertBlock secondary is render with values', () => {
  act(() => {
    render(
      <BaseComponentTestWrapper mockStore={store}>
        <ConvertBlock type="secondary" storedValue={['USD', 'EUR']} setValue={nop} />
      </BaseComponentTestWrapper>,
      container
    )
  })

  const input = container.querySelector('input')
  expect(input.value).toBe('1')
})

it('ConvertBlock is render without type', () => {
  act(() => {
    render(
      <BaseComponentTestWrapper mockStore={store}>
        <ConvertBlock storedValue={['USD', 'EUR']} setValue={nop} />
      </BaseComponentTestWrapper>,
      container
    )
  })

  const input = container.querySelector('input')
  expect(input.value).toBe('1')
})
