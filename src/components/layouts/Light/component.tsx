import React from 'react'

import { childrenPropType } from '@/prop-types'

interface IProps {
  props?: any,
  children?: any
}

const LightLayout: React.FC<IProps> = ({ children }) => (
  <>
    {children}
  </>
)

LightLayout.propTypes = {
  children: childrenPropType,
}

export default LightLayout
