import React from 'react'
import { IntlProvider } from 'react-intl'
import { connect } from 'react-redux'
import pt from 'prop-types'

import { childrenPropType } from '@/prop-types'
import getMessages from '@/internalization'

const Internalization = ({ children, language }) => (
  <IntlProvider locale={language} messages={getMessages(language)}>
    {children}
  </IntlProvider>
)

const mapStateToProps = state => ({
  language: state.internalization.active,
})

Internalization.propTypes = {
  children: childrenPropType,
  language: pt.string.isRequired,
}

export default connect(mapStateToProps)(Internalization)
