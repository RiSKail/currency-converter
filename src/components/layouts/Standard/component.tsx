import React from 'react'

import Header from '@/components/blocks/global/Header'

import { childrenPropType } from '@/prop-types'

interface IProps {
  props?: any,
  children?: any
}

const StandardLayout = ({ children }: IProps) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)

StandardLayout.propTypes = {
  children: childrenPropType,
}

export default StandardLayout
