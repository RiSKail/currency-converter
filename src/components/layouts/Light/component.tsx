import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const LightLayout: React.FC<Props> = ({ children }) => <>{children}</>

export default LightLayout
