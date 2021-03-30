import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import BaseComponentTestWrapper from '@/components/wrappers/BaseComponentTestWrapper'

import NotFound from './component'

it('NotFound page is render', () => {
  render(
    <BaseComponentTestWrapper>
      <NotFound />
    </BaseComponentTestWrapper>
  )
})
