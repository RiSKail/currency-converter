import React, { ReactNode } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { LOGIN_PAGE_PATH } from '@/constants'
import { IRootState } from '@/types/rootStateTypes'
interface IProps {
  path: string,
  exact: boolean,
  component?: React.FC,
  render: () => ReactNode,
  rest?: any,
}

const SecuredRoute: React.FC<IProps> = ({ component, ...rest }) => {
  const auth = useSelector((state: IRootState) => state.firebase.auth)

  if (auth.uid) {
    return <Route {...rest} component={component} />
  } else {
    return <Redirect to={LOGIN_PAGE_PATH} />
  }
}

export default SecuredRoute
