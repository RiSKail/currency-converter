
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { CONVERTER_PAGE_PATH, MAP_PAGE_PATH } from '../../../../constants/paths'
import SetLocale from '@/components/blocks/global/SetLocale'
import Header from './styles'
import versionImg from './img/version-icon.svg'
import logoutImg from './img/logout.svg'
import authorImg from './img/author-icon.svg'
import { signOut } from './../../../../actions/authActions'

export default () => {
  const uid = useSelector(state => state.firebase.auth.uid)
  const authData = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const onSignOutHandler = () => {
    dispatch(signOut())
  }

  return (
    <Header>
      <ul>
        <SetLocale />
        {uid && <li><NavLink activeClassName="is-active" to={CONVERTER_PAGE_PATH}><FormattedMessage id="header_converter_link" /></NavLink></li>}
        {uid && <li><NavLink activeClassName="is-active" to={MAP_PAGE_PATH}><FormattedMessage id="header_map_link" /></NavLink></li>}
      </ul>
      <ul>
        {uid ? <li>{(authData.firstName || '') + ' ' + (authData.lastName || '')}</li>
          : <li><img src={versionImg} alt="Version" /><FormattedMessage id="headerVersion" /></li>}
        {uid ? <li><NavLink to="#" onClick={onSignOutHandler}><img src={logoutImg} alt="Logout" /><FormattedMessage id="sign_out_text" /></NavLink></li>
          : <li><img src={authorImg} alt="Author" /><FormattedMessage id="headerAuthor" /></li>}
      </ul>
    </Header>
  )
}
