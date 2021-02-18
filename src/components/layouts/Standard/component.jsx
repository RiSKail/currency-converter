import React from 'react'

import Header from '@/components/blocks/global/Header'

import { childrenPropType } from '@/prop-types'

const StandardLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)

StandardLayout.propTypes = {
  children: childrenPropType,
}

export default StandardLayout
