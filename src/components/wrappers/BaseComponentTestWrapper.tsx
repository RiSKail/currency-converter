import React, { ReactNode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { AnyAction, Store } from 'redux'

import Internalization from '@/components/wrappers/Internalization'
import ThemeProviderWrapper from '@/components/wrappers/ThemeProvider'

import { getStore } from '@/store'

interface Props {
  mockStore?: Store<unknown, AnyAction>
  children: ReactNode
}

const BaseComponentTestWrapper: React.FC<Props> = ({ mockStore, children }) => (
  <Provider store={mockStore || getStore()}>
    <Internalization>
      <ThemeProviderWrapper>
        <Router>{children}</Router>
      </ThemeProviderWrapper>
    </Internalization>
  </Provider>
)

export default BaseComponentTestWrapper
