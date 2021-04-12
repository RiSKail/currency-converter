import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import BaseComponentTestWrapper from '@/components/wrappers/BaseComponentTestWrapper'

import { nop } from '@/utils/other'

import Alert from './index'

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

describe('Alert tests', () => {
  it('Render with text', () => {
    act(() => {
      render(
        <BaseComponentTestWrapper>
          <Alert text="test" callback={nop} />
        </BaseComponentTestWrapper>,
        container
      )
    })

    expect(container.textContent).toBe('×! test')
  })

  it('Render without text', () => {
    act(() => {
      render(
        <BaseComponentTestWrapper>
          <Alert callback={() => true} />
        </BaseComponentTestWrapper>,
        container
      )
    })

    expect(container.textContent).toBe('×! ')
  })
})
