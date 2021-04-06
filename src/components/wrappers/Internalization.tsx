import React, { ReactNode } from 'react'
import { IntlProvider } from 'react-intl'
import { connect } from 'react-redux'
import pt from 'prop-types'

import { childrenPropType } from '@/prop-types'
import getMessages from '@/internalization'
import { IrootState } from '@/types/rootStateTypes'

interface IstateProps {
  language: string;
}

interface Iprops extends IstateProps {
  children: ReactNode;
}


const Internalization: React.FC<Iprops> = ({ children, language }) => (
  <IntlProvider locale={language} messages={getMessages(language)}>
    {children}
  </IntlProvider>
)

const mapStateToProps = (state: IrootState): IstateProps => ({
  language: state.internalization.active,
})

Internalization.propTypes = {
  children: childrenPropType,
  language: pt.string.isRequired,
}

export default connect(mapStateToProps)(Internalization)
