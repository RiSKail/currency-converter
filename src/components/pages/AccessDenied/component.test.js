import React from 'react'
import 'jest-styled-components'
import { render, unmountComponentAtNode } from 'react-dom'

import BaseComponentTestWrapper from '@/components/wrappers/BaseComponentTestWrapper'
import AccessDenied from './component'

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

it('AccessDenied page is render', () => {
  render(
    <BaseComponentTestWrapper>
      <AccessDenied />
    </BaseComponentTestWrapper>,
    container
  )

  const links = container.querySelectorAll('a')
  expect(links.length).not.toBe(0)
})
