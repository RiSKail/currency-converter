import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Loader from '@/components/blocks/global/Loader'
import SecuredRoute from '@/components/wrappers/SecuredRoute'

import { CONVERTER_PAGE_PATH, HOME_PAGE_PATH, LOGIN_PAGE_PATH, MAP_PAGE_PATH } from '@/constants'

const ConverterPage = React.lazy(() => import('@/components/pages/Converter'))
const MapPage = React.lazy(() => import('@/components/pages/Map'))
const LoginPage = React.lazy(() => import('@/components/pages/Login'))
const NotFoundPage = React.lazy(() => import('@/components/pages/NotFound'))

const Routers = (props: any) => (
  <Router>
    <React.Suspense fallback={<Loader />}>
      <Switch>
        <Route
          exact
          path={LOGIN_PAGE_PATH}
          render={() => <LoginPage {...props} />} />

        <SecuredRoute
          exact
          path={HOME_PAGE_PATH}
          render={() => <ConverterPage {...props} />} />

        <SecuredRoute
          exact
          path={CONVERTER_PAGE_PATH}
          render={() => <ConverterPage {...props} />} />

        <SecuredRoute
          exact
          path={MAP_PAGE_PATH}
          render={() => <MapPage {...props} />} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </React.Suspense>
  </Router>
)

export default Routers
