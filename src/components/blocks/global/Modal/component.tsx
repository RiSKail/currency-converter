import React, { ReactNode } from 'react'
import pt from 'prop-types'
import { childrenPropType } from '@/prop-types'

import ModalStyle, { ModalContent } from './styles'

interface Iprops {
  callback(): void;
  children?: ReactNode;
}

const Modal: React.FC<Iprops> = ({ callback, children }) => {
  const onToggleModal = (): void => {
    callback()
  }

  return (
    <ModalStyle>
      <ModalContent>
        <span className="close-btn" onClick={onToggleModal}>&times;</span>
        {children}
      </ModalContent>
    </ModalStyle>
  )
}

Modal.propTypes = {
  callback: pt.func.isRequired,
  children: childrenPropType,
}

export default Modal
