import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { LOGIN_PAGE_PATH } from '@/constants'

interface IProps {
  path: string,
  exact: boolean,
  component?: any,
  render: () => React.ReactNode,
  rest?: any,
}

const SecuredRoute = ({ component, ...rest }: IProps) => {
  const auth = useSelector((state: any) => state.firebase.auth)

  if (auth.uid) {
    return <Route {...rest} component={component} />
  } else {
    return <Redirect to={LOGIN_PAGE_PATH} />
  }
}

export default SecuredRoute
