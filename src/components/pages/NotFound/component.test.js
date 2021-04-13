import React from 'react'
import 'jest-styled-components'
import { render, unmountComponentAtNode } from 'react-dom'

import BaseComponentTestWrapper from '@/components/wrappers/BaseComponentTestWrapper'

import NotFound from './component'

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

it('NotFound page is render', () => {
  render(
    <BaseComponentTestWrapper>
      <NotFound />
    </BaseComponentTestWrapper>,
    container
  )

  const links = container.querySelectorAll('a')
  expect(links.length).not.toBe(0)
})
