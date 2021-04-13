import React from 'react'
import { FormattedMessage } from 'react-intl'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import SetLocale from '@/components/blocks/global/SetLocale'

import { signOut } from '@/actions'
import { RootState } from '@/types/rootStateTypes'
import { CONVERTER_PAGE_PATH, MAP_PAGE_PATH } from '@/constants/paths'

import HeaderStyle from './styles'

import versionImg from './img/version-icon.svg'
import logoutImg from './img/logout.svg'
import authorImg from './img/author-icon.svg'
import avatarImg from './img/generic-avatar.jpg'

const Header: React.FC = () => {
  const uid = useSelector((state: RootState) => state.firebase.auth.uid)
  const photo = useSelector((state: RootState) => state.firebase.auth.photoURL)
  const authData = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  const photoContent = <img src={photo || avatarImg} alt="Avatar" className="profile-avatar" />

  const handleSignOut = (): void => {
    dispatch(signOut())
  }

  return (
    <HeaderStyle>
      {uid ? (
        <>
          <ul>
            <SetLocale />
            <li data-testid={CONVERTER_PAGE_PATH}>
              <NavLink activeClassName="is-active" to={CONVERTER_PAGE_PATH}>
                <FormattedMessage id="header_converter_link" />
              </NavLink>
            </li>
            <li data-testid={MAP_PAGE_PATH}>
              <NavLink activeClassName="is-active" to={MAP_PAGE_PATH}>
                <FormattedMessage id="header_map_link" />
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              {photoContent}
              {`${authData.firstName || ''} ${authData.lastName || ''}`}
            </li>
            <li>
              <NavLink to="#" onClick={handleSignOut}>
                <img src={logoutImg} alt="Logout" />
                <FormattedMessage id="sign_out_text" />
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
            <li>
              <img src={versionImg} alt="Version" />
              <FormattedMessage id="headerVersion" />
            </li>
            <li>
              <img src={authorImg} alt="Author" />
              <FormattedMessage id="headerAuthor" />
            </li>
          </ul>
        </>
      )}
    </HeaderStyle>
  )
}

export default Header
