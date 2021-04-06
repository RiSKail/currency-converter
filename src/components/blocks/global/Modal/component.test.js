import React from "react"
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import BaseComponentTestWrapper from '@/components/wrappers/BaseComponentTestWrapper'
import Modal from './index'

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

describe('Modal tests', () => {
  it('Render with text', () => {
    act(() => {
      render(
        <BaseComponentTestWrapper>
          <Modal callback={() => console.log(true)}>Test</Modal>
        </BaseComponentTestWrapper>, container
      )
    })
    expect(container.textContent).toBe('×Test')
  })

  it('Render without text', () => {
    act(() => {
      render(
        <BaseComponentTestWrapper>
          <Modal callback={() => console.log(true)} />
        </BaseComponentTestWrapper>, container
      )
    })
    expect(container.textContent).toBe('×')
  })
})
