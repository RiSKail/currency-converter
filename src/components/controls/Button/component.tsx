import React, { ReactNode } from 'react'

import ButtonStyle from './styles'

interface Props {
  onClick?: () => void
  type?: string
  children?: ReactNode
  [x: string]: unknown
}

const Button: React.FC<Props> = ({ type, children, ...props }) => {
  switch (type) {
    case 'Primary':
      return (
        <ButtonStyle borderRadius="8px" padding="13px 20px" {...props}>
          {children}
        </ButtonStyle>
      )
    case 'Circle':
      return (
        <ButtonStyle borderRadius="180px" padding="20px" {...props}>
          {children}
        </ButtonStyle>
      )
    default:
      return <ButtonStyle {...props}>{children}</ButtonStyle>
  }
}

export default Button
