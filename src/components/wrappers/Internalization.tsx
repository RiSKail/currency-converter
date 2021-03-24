import React, { ReactNode } from 'react'
import { IntlProvider } from 'react-intl'
import { connect } from 'react-redux'
import pt from 'prop-types'
import { childrenPropType } from '@/prop-types'
import getMessages from '@/internalization'
import { IRootState } from '@/types/rootStateTypes'

interface IProps {
  children?: ReactNode,
  language: string,
  props?: any
}

const Internalization: React.FC<IProps> = ({ children, language }) => (
  <IntlProvider locale={language} messages={getMessages(language)}>
    {children}
  </IntlProvider>
)

const mapStateToProps = (state: IRootState) => ({
  language: state.internalization.active,
})

Internalization.propTypes = {
  children: childrenPropType,
  language: pt.string.isRequired,
}

export default connect(mapStateToProps)(Internalization)
