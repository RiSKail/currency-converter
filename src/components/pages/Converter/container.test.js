import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'
import { act } from 'react-dom/test-utils'
import screenshotsTests from '@/e2e'
import BaseComponentTestWrapper from '@/components/wrappers/BaseComponentTestWrapper'

import Landing from './container'

it('Landing page has no visual regressions', async () => {

  act(() => {
    render(
      <BaseComponentTestWrapper>
        <Landing update={() => console.log(true)}/>
      </BaseComponentTestWrapper>
    )
  })

  await screenshotsTests(expect, 'Landing')
})
