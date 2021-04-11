import React, { ReactNode } from 'react'
import { Route, Redirect } from 'react-router-dom'
import pt from 'prop-types'
import { useSelector } from 'react-redux'

import { SIGN_PAGE_PATH } from '@/constants'
import { IrootState } from '@/types/rootStateTypes'
interface Iprops {
  path: string;
  exact: boolean;
  component?: React.FC;
  render: () => ReactNode;
  rest?: unknown;
}

const SecuredRoute: React.FC<Iprops> = ({ component, ...rest }) => {
  const auth = useSelector((state: IrootState) => state.firebase.auth)

  return auth.uid ? <Route {...rest} component={component} /> : <Redirect to={SIGN_PAGE_PATH} />
}

SecuredRoute.propTypes = {
  component: pt.any,
}

export default SecuredRoute
