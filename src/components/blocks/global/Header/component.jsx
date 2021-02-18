
import React from 'react'
import { FormattedMessage } from 'react-intl'

import SetLocale from '@/components/blocks/global/SetLocale'

import Header from './styles'
import versionImg from './img/version-icon.svg'
import authorImg from './img/author-icon.svg'

export default () => (
  <Header>
    <SetLocale />
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
  </Header>
)
