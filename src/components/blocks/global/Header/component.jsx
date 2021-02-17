
import React from 'react'
import { FormattedMessage } from 'react-intl'

import SetLocale from '@/components/blocks/global/SetLocale'

import Header from './styles'

export default () => (
  <Header>
    <FormattedMessage id="header" />
    <SetLocale />
  </Header>
)
