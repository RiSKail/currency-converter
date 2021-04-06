import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import BaseComponentTestWrapper from '@/components/wrappers/BaseComponentTestWrapper'

import Sign from './container'

it('Sign page is render', () => {
  render(
    <BaseComponentTestWrapper>
      <Sign />
    </BaseComponentTestWrapper>
  )
})
