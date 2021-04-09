import React from "react"
import { render, unmountComponentAtNode } from 'react-dom'

import BaseComponentTestWrapper from '@/components/wrappers/BaseComponentTestWrapper'
import SetMap from './index'

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

it('SetMap is render without crashing', () => {
  render(
    <BaseComponentTestWrapper>
      <SetMap />
    </BaseComponentTestWrapper>, container
  )

  const select = container.querySelectorAll('select')
  expect(select.length).not.toBe(0)
})
