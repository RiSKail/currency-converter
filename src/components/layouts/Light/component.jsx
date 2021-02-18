import React from 'react'

import { childrenPropType } from '@/prop-types'

const LightLayout = ({ children }) => (
  <>
    {children}
  </>
)

LightLayout.propTypes = {
  children: childrenPropType,
}

export default LightLayout
