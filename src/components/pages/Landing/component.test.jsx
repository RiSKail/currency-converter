import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import screenshotsTests from '@/e2e'
import BaseComponentTestWrapper from '@/components/wrappers/BaseComponentTestWrapper'

import Landing from './component'

it('Landing page has no visual regressions', async () => {
  render(
    <BaseComponentTestWrapper>
      <Landing />
    </BaseComponentTestWrapper>
  )

  await screenshotsTests(expect, 'Landing')
})
