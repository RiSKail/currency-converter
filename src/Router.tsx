import React, { ReactNode } from 'react'
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom'
import pt from 'prop-types'

import Loader from '@/components/blocks/global/Loader'
import SecuredRoute from '@/components/wrappers/SecuredRoute'

import { childrenPropType } from '@/prop-types'
import { CONVERTER_PAGE_PATH, HOME_PAGE_PATH, SIGN_PAGE_PATH, MAP_PAGE_PATH } from '@/constants'

const ConverterPage = React.lazy(() => import('@/components/pages/Converter'))
const MapPage = React.lazy(() => import('@/components/pages/Map'))
const SignPage = React.lazy(() => import('@/components/pages/Sign'))
const NotFoundPage = React.lazy(() => import('@/components/pages/NotFound'))

interface IrouterProps {
  update: () => void;
}

interface IchangeRouterProps {
  children: ReactNode;
}

const ChangeRouter: React.FC<IchangeRouterProps> = ({ children }) => {
  switch (process.env.APP_ENV) {
    case 'electron':
      return (
        <HashRouter>
          {children}
        </HashRouter>
      )
    case 'react':
    default:
      return (
        <BrowserRouter>
          {children}
        </BrowserRouter>
      )
  }
}

const Routers: React.FC<IrouterProps> = ({ update }) => (
  <ChangeRouter>
    <React.Suspense fallback={<Loader />}>
      <Switch>
        <Route
          exact
          path={SIGN_PAGE_PATH}
          render={(): ReactNode => <SignPage update={update} />} />

        <SecuredRoute
          exact
          path={HOME_PAGE_PATH}
          render={(): ReactNode => <ConverterPage update={update} />} />

        <SecuredRoute
          exact
          path={CONVERTER_PAGE_PATH}
          render={(): ReactNode => <ConverterPage update={update} />} />

        <SecuredRoute
          exact
          path={MAP_PAGE_PATH}
          render={(): ReactNode => <MapPage />} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </React.Suspense>
  </ChangeRouter>
)

Routers.propTypes = {
  update: pt.func.isRequired,
}

ChangeRouter.propTypes = {
  children: childrenPropType.isRequired,
}

export default Routers
