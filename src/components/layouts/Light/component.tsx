import React, { ReactNode } from 'react'

import { childrenPropType } from '@/prop-types'

interface Iprops {
  children: ReactNode;
}

const LightLayout: React.FC<Iprops> = ({ children }) => (
  <>
    {children}
  </>
)

LightLayout.propTypes = {
  children: childrenPropType,
}

export default LightLayout
