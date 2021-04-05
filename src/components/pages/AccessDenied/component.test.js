import React from 'react'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import 'jest-styled-components'

import screenshotsTests from '@/e2e'
import BaseComponentTestWrapper from '@/components/wrappers/BaseComponentTestWrapper'

import AccessDenied from './component'

it('AccessDenied page has no visual regressions', async () => {
  act(() => {
    render(
      <BaseComponentTestWrapper>
        <AccessDenied />
      </BaseComponentTestWrapper>
    )
  })

  await screenshotsTests(expect, 'AccessDenied')
})
