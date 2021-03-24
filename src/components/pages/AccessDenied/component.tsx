import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { FormattedMessage } from 'react-intl'

import LightLayout from '@/components/layouts/Light'

import { LOGIN_PAGE_PATH } from '@/constants'

import Wrapper from './styles'

const LandingPage: React.FC = () => (
  <LightLayout>
    <Wrapper>
      <FormattedMessage id="access_denied" />
      <br />
      <Link to={LOGIN_PAGE_PATH}>
        <FormattedMessage id="return_home" />
      </Link>
    </Wrapper>
  </LightLayout>
)

export default LandingPage
