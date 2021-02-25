import React from 'react'
import { Provider } from 'react-redux'
import HttpsRedirect from 'react-https-redirect'
import WithServiceWorker from '@medipass/react-service-worker'
import Router from '@/Router'
import { getStore } from '@/store'
import ThemeProviderWrapper from '@/components/wrappers/ThemeProvider'
import Internalization from '@/components/wrappers/Internalization'

function App () {
  return (
    <Provider store={getStore()}>
      <WithServiceWorker
        onError={err => console.log(`An error occured: ${err}`)}
        onInstalled={() => console.log('Service worker installed')}
        onUpdated={() => console.log('Service worker updated')}
        publicServiceWorkerDest="/service-worker.js"
      >
        {({ update }) => (
          <HttpsRedirect>
            <Internalization>
              <ThemeProviderWrapper>
                <Router update={update} />
              </ThemeProviderWrapper>
            </Internalization>
          </HttpsRedirect>
        )}
      </WithServiceWorker>
    </Provider>
  )
}

export default App
