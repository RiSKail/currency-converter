import React from 'react'
import 'jest-styled-components'
import { render, unmountComponentAtNode } from 'react-dom'

import App from './App'

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

it('App is render without crashing', () => {
  render(<App />, container)

  const div = container.querySelectorAll('div')
  expect(div.length).not.toBe(0)
})
