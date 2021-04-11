import React, { ReactNode } from 'react'
import pt from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { AnyAction, Store } from 'redux'

import Internalization from '@/components/wrappers/Internalization'
import ThemeProviderWrapper from '@/components/wrappers/ThemeProvider'

import { getStore } from '@/store'
import { childrenPropType } from '@/prop-types'

interface Iprops {
  mockStore?: Store<unknown, AnyAction>;
  children: ReactNode;
}

const BaseComponentTestWrapper: React.FC<Iprops> = ({ mockStore, children }) => (
  <Provider store={(mockStore) ? mockStore : getStore()}>
    <Internalization>
      <ThemeProviderWrapper>
        <Router>
          {children}
        </Router>
      </ThemeProviderWrapper>
    </Internalization>
  </Provider>
)

BaseComponentTestWrapper.propTypes = {
  mockStore: pt.any,
  children: childrenPropType,
}

export default BaseComponentTestWrapper
