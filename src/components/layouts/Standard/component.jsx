import React from 'react'

import Header from '@/components/blocks/global/Header'
import Footer from '@/components/blocks/global/Footer'

import { childrenPropType } from '@/prop-types'

const StandardLayout = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

StandardLayout.propTypes = {
  children: childrenPropType,
}

export default StandardLayout
