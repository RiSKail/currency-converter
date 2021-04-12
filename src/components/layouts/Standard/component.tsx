import React, { ReactNode } from 'react'

import Header from '@/components/blocks/global/Header'

interface Props {
  children: ReactNode
}

const StandardLayout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)

export default StandardLayout
