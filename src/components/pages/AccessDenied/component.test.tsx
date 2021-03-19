import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import screenshotsTests from '@/e2e'
import BaseComponentTestWrapper from '@/components/wrappers/BaseComponentTestWrapper'

import AccessDenied from './component'

it('AccessDenied page has no visual regressions', async () => {
  render(
    <BaseComponentTestWrapper>
      <AccessDenied />
    </BaseComponentTestWrapper>
  )

  await screenshotsTests(expect, 'AccessDenied')
})
