import React from 'react'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import HttpsRedirect from 'react-https-redirect'
import WithServiceWorker from '@medipass/react-service-worker'
import Router from '@/Router'
import { getStore } from '@/store'
import ThemeProviderWrapper from '@/components/wrappers/ThemeProvider'
import Internalization from '@/components/wrappers/Internalization'
import firebase from './firebase'

const rrfConfig = { userProfile: 'users' }

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: getStore().dispatch,
}

const App: React.FC = () => {
  return (
    <Provider store={getStore()}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <WithServiceWorker
          onError={(err: string) => console.log(`An error occured: ${err}`)}
          onInstalled={(): void => console.log('Service worker installed')}
          onUpdated={(): void => console.log('Service worker updated')}
          publicServiceWorkerDest="./service-worker.js"
        >
          {({ update }: {update: () => void}) => (
            <HttpsRedirect>
              <Internalization>
                <ThemeProviderWrapper>
                  <Router update={update} />
                </ThemeProviderWrapper>
              </Internalization>
            </HttpsRedirect>
          )}
        </WithServiceWorker>
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}

export default App
