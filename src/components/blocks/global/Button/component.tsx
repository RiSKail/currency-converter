
import React, { ReactNode } from 'react'
import pt from 'prop-types'

import ButtonStyle from './styles'

interface Iprops {
  onClick?: () => void;
  type?: string;
  children?: ReactNode;
  [x: string]: unknown;
}

const Button: React.FC<Iprops> = ({ type, children, ...props }) => {
  switch (type) {
    case 'Primary':
      return <ButtonStyle borderRadius="8px" padding="13px 20px" {...props}>{children}</ButtonStyle>
    case 'Circle':
      return <ButtonStyle borderRadius="180px" padding="20px" {...props}>{children}</ButtonStyle>
    default:
      return <ButtonStyle {...props}>{children}</ButtonStyle>
  }
}

Button.propTypes = {
  type: pt.string,
  children: pt.any,
  onClick: pt.func,
}

export default Button