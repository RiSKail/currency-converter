import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import BaseComponentTestWrapper from '@/components/wrappers/BaseComponentTestWrapper'

import Map from './container'

it('Map page is render', () => {
  render(
    <BaseComponentTestWrapper>
      <Map />
    </BaseComponentTestWrapper>
  )
})
