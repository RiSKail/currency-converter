import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import pt from 'prop-types'
import { useSelector } from 'react-redux'

const SecuredRoute = ({ component, ...rest }) => {
  const auth = useSelector(state => state.firebase.auth)

  if (auth.uid) { return <Route {...rest} component={component} /> } else { return <Redirect to="/login" /> }
}

SecuredRoute.propTypes = {
  component: pt.oneOfType([
    Route.propTypes.component,
    pt.object,
  ])
}

export default SecuredRoute
