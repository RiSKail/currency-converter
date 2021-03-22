import React, { ReactNode } from 'react'
import { IntlProvider } from 'react-intl'
import { connect } from 'react-redux'
import getMessages from '@/internalization'

interface IProps {
  children?: ReactNode,
  language: string,
  props?: any
}

const Internalization = ({ children, language }: IProps) => (
  <IntlProvider locale={language} messages={getMessages(language)}>
    {children}
  </IntlProvider>
)

const mapStateToProps = (state: any) => ({
  language: state.internalization.active,
})

export default connect<IProps>(mapStateToProps)(Internalization)
