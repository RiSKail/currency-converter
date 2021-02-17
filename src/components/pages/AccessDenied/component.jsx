import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { FormattedMessage } from 'react-intl'

import LightLayout from '@/components/layouts/Light'

import { LANDING_PAGE_PATH } from '@/constants'

import Wrapper from './styles'

const LandingPage = () => (
  <LightLayout>
    <Wrapper>
      <FormattedMessage id="access_denied" />
      <br />
      <Link to={LANDING_PAGE_PATH}>
        <FormattedMessage id="return_home" />
      </Link>
    </Wrapper>
  </LightLayout>
)

export default LandingPage
