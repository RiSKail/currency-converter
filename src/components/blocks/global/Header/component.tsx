
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { CONVERTER_PAGE_PATH, MAP_PAGE_PATH } from '@/constants/paths'
import SetLocale from '@/components/blocks/global/SetLocale'
import Header from './styles'
import versionImg from './img/version-icon.svg'
import avatarImg from './img/generic-avatar.jpg'
import logoutImg from './img/logout.svg'
import authorImg from './img/author-icon.svg'
import { signOut } from '@/actions'

export default () => {
  const uid = useSelector((state: any) => state.firebase.auth.uid)
  const photo = useSelector((state: any) => state.firebase.auth.photoURL)
  const authData = useSelector((state: any) => state.auth)
  const dispatch = useDispatch()
  let photoContent

  const onSignOutHandler = () => {
    dispatch(signOut())
  }

  if (photo) {
    photoContent = (<img src={photo} alt="Avatar" className="profile-avatar" />)
  } else {
    photoContent = (<img src={avatarImg} alt="Avatar" className="profile-avatar" />)
  }

  return (
    <Header>
      {uid ? (
        <>
          <ul>
            <SetLocale />
            <li>
              <NavLink activeClassName="is-active" to={CONVERTER_PAGE_PATH}>
                <FormattedMessage id="header_converter_link" />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to={MAP_PAGE_PATH}>
                <FormattedMessage id="header_map_link" />
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              {photoContent}
              {(authData.firstName || '') + ' ' + (authData.lastName || '')}
            </li>
            <li>
              <NavLink to="#" onClick={onSignOutHandler}>
                <img src={logoutImg} alt="Logout" /><FormattedMessage id="sign_out_text" />
              </NavLink>
            </li>
          </ul>
        </>
      ) : (
        <>
          <ul>
            <SetLocale />
          </ul>
          <ul>
            <li><img src={versionImg} alt="Version" /><FormattedMessage id="headerVersion" /></li>
            <li><img src={authorImg} alt="Author" /><FormattedMessage id="headerAuthor" /></li>
          </ul>
        </>
      )}
    </Header>
  )
}
