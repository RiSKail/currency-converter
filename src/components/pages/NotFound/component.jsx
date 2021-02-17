import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { FormattedMessage } from 'react-intl'

import LightLayout from '@/components/layouts/Light'

import { LANDING_PAGE_PATH } from '@/constants'

import Wrapper from './styles'

const NotFound = () => (
  <LightLayout>
    <Wrapper>
      <FormattedMessage id="page_not_found" />
      <br />
      <Link to={LANDING_PAGE_PATH}>
        <FormattedMessage id="return_home" />
      </Link>
    </Wrapper>
  </LightLayout>
)

export default NotFound
