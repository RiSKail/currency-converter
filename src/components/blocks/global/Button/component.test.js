import React from "react"
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import BaseComponentTestWrapper from '@/components/wrappers/BaseComponentTestWrapper'
import Button from './index'

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

describe('Button tests', () => {
  it('Render primary button', () => {
    act(() => {
      render(
        <BaseComponentTestWrapper>
          <Button type="Primary">Test</Button>
        </BaseComponentTestWrapper>, container
      )
    })
    const btn = container.querySelector('button')
    const style = getComputedStyle(btn, null).getPropertyValue('border-radius')
    expect(style).toBe('8px')
    expect(container.textContent).toBe('Test')
  })

  it('Render circle button', () => {
    act(() => {
      render(
        <BaseComponentTestWrapper>
          <Button type="Circle">Test</Button>
        </BaseComponentTestWrapper>, container
      )
    })
    const btn = container.querySelector('button')
    const style = getComputedStyle(btn, null).getPropertyValue('border-radius')
    expect(style).toBe('180px')
    expect(container.textContent).toBe('Test')
  })

  it('Render without type', () => {
    act(() => {
      render(
        <BaseComponentTestWrapper>
          <Button>Test</Button>
        </BaseComponentTestWrapper>, container
      )
    })
    expect(container.textContent).toBe('Test')
  })
})
