import React from 'react'
import { Provider } from 'react-redux'

import Router from '@/Router'
import { getStore } from '@/store'
import ThemeProviderWrapper from '@/components/wrappers/ThemeProvider'
import Internalization from '@/components/wrappers/Internalization'

function App () {
  return (
    <Provider store={getStore()}>
      <Internalization>
        <ThemeProviderWrapper>
          <Router />
        </ThemeProviderWrapper>
      </Internalization>
    </Provider>
  )
}

export default App
