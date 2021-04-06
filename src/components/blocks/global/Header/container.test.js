import React from "react"
import { render, unmountComponentAtNode } from 'react-dom'

import BaseComponentTestWrapper from '@/components/wrappers/BaseComponentTestWrapper'
import Header from './index'

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

it('Header is render without crashing', () => {
  render(
    <BaseComponentTestWrapper>
      <Header />
    </BaseComponentTestWrapper>, container
  )

  const ul = container.querySelectorAll('ul')
  expect(ul.length).not.toBe(0)
})
