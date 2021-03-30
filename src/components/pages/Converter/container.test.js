import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import BaseComponentTestWrapper from '@/components/wrappers/BaseComponentTestWrapper'

import Converter from './container'

it('Converter page is render', () => {
  render(
    <BaseComponentTestWrapper>
      <Converter update={() => console.log(true)}/>
    </BaseComponentTestWrapper>
  )
})
