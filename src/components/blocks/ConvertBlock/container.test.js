import React from 'react'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import 'jest-styled-components'

import BaseComponentTestWrapper from '@/components/wrappers/BaseComponentTestWrapper'

import ConvertBlock from './container'

it('ConvertBlock has no visual regressions', () => {
  act(() => {
    render(
      <BaseComponentTestWrapper>
        <ConvertBlock 
          setValue={(a) => console.log(a)}
          type="primary"
          storedValue={["USD", "EUR"]}
        />
      </BaseComponentTestWrapper>
    )
  })
})
