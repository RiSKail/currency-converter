import React from "react"
import { render, unmountComponentAtNode } from 'react-dom'
import BaseComponentTestWrapper from '@/components/wrappers/BaseComponentTestWrapper'
import SetLocale from './index'

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

it('SetLocale is render without crashing', () => {
  render(
    <BaseComponentTestWrapper>
      <SetLocale />
    </BaseComponentTestWrapper>, container
  )
})
