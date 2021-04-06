import React from 'react'
import { render } from "@testing-library/react"
import 'jest-styled-components'

import BaseComponentTestWrapper from '@/components/wrappers/BaseComponentTestWrapper'

import AccessDenied from './component'

it('AccessDenied page is render', () => {
  render(
    <BaseComponentTestWrapper>
      <AccessDenied />
    </BaseComponentTestWrapper>
  )
})
