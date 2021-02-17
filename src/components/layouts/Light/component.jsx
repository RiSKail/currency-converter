import React from 'react'

import { childrenPropType } from '@/prop-types'

const LightLayout = ({ children }) => (
  <div>
    {children}
  </div>
)

LightLayout.propTypes = {
  children: childrenPropType,
}

export default LightLayout
