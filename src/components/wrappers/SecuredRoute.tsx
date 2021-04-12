import React, { ReactNode } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { SIGN_PAGE_PATH } from '@/constants'
import { RootState } from '@/types/rootStateTypes'

interface Props {
  path: string
  exact: boolean
  component?: React.FC
  render: () => ReactNode
  rest?: unknown
}

const SecuredRoute: React.FC<Props> = ({ component, ...rest }) => {
  const auth = useSelector((state: RootState) => state.firebase.auth)

  return auth.uid ? <Route {...rest} component={component} /> : <Redirect to={SIGN_PAGE_PATH} />
}

export default SecuredRoute
