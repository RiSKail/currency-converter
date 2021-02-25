import React from 'react'
import { Provider } from 'react-redux'
import HttpsRedirect from 'react-https-redirect'

import Router from '@/Router'
import { getStore } from '@/store'
import ThemeProviderWrapper from '@/components/wrappers/ThemeProvider'
import Internalization from '@/components/wrappers/Internalization'

function App () {
  return (
    <Provider store={getStore()}>
      <HttpsRedirect>
        <Internalization>
          <ThemeProviderWrapper>
            <Router />
          </ThemeProviderWrapper>
        </Internalization>
      </HttpsRedirect>
    </Provider>
  )
}

export default App
