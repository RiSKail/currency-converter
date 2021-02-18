
import React from 'react'

import Button from './styles'

export default ({ type, ...props }) => {
  switch (type) {
    case 'Primary':
      return <Button borderRadius="8px" padding="13px 20px" {...props}>{props.children}</Button>
    case 'Circle':
      return <Button borderRadius="180px" {...props}>{props.children}</Button>
    default:
      return <Button {...props} />
  }
}