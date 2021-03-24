import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
import { FormattedMessage } from 'react-intl'

import LightLayout from '@/components/layouts/Light'

import { CONVERTER_PAGE_PATH } from '@/constants'

import Wrapper from './styles'

const NotFound: React.FC = () => (
  <LightLayout>
    <Wrapper>
      <FormattedMessage id="page_not_found" />
      <br />
      <NavLink to={CONVERTER_PAGE_PATH}>
        <FormattedMessage id="return_home" />
      </NavLink>
    </Wrapper>
  </LightLayout>
)

export default NotFound
