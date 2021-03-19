import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import screenshotsTests from '@/e2e'
import BaseComponentTestWrapper from '@/components/wrappers/BaseComponentTestWrapper'

import NotFound from './component'

it('NotFound page has no visual regressions', async () => {
  render(
    <BaseComponentTestWrapper>
      <NotFound />
    </BaseComponentTestWrapper>
  )

  await screenshotsTests(expect, 'NotFound')
})
