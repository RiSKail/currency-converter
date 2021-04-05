import React, { ReactNode } from 'react'

import Header from '@/components/blocks/global/Header'

import { childrenPropType } from '@/prop-types'

interface Iprops {
  children: ReactNode;
}

const StandardLayout: React.FC<Iprops> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)

StandardLayout.propTypes = {
  children: childrenPropType,
}

export default StandardLayout
