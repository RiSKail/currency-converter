import React from 'react'
import 'jest-styled-components'
import { render, unmountComponentAtNode } from 'react-dom'

import BaseComponentTestWrapper from '@/components/wrappers/BaseComponentTestWrapper'

import { nop } from '@/utils/other'

import Converter from './container'

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

it('Converter page is render', () => {
  render(
    <BaseComponentTestWrapper>
      <Converter update={nop} />
    </BaseComponentTestWrapper>,
    container
  )

  const div = container.querySelectorAll('div')
  expect(div.length).not.toBe(0)
})
