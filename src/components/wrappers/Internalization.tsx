import React, { ReactNode } from 'react'
import { IntlProvider } from 'react-intl'
import { connect } from 'react-redux'

import getMessages from '@/internalization'
import { RootState } from '@/types/rootStateTypes'

interface StateProps {
  language: string
}

interface Props extends StateProps {
  children: ReactNode
}

const Internalization: React.FC<Props> = ({ children, language }) => (
  <IntlProvider locale={language} messages={getMessages(language)}>
    {children}
  </IntlProvider>
)

const mapStateToProps = (state: RootState): StateProps => ({
  language: state.internalization.active,
})

export default connect(mapStateToProps)(Internalization)
