import React from 'react'
import 'jest-styled-components'
import { render, unmountComponentAtNode } from 'react-dom'

import BaseComponentTestWrapper from '@/components/wrappers/BaseComponentTestWrapper'

import Map from './container'

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

it('Map page is render', () => {
  render(
    <BaseComponentTestWrapper>
      <Map />
    </BaseComponentTestWrapper>,
    container
  )

  const div = container.querySelectorAll('div')
  expect(div.length).not.toBe(0)
})
