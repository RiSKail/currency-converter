import React, { ReactNode } from 'react'

import ModalStyle, { ModalContent } from './styles'

interface Props {
  callback(): void
  children?: ReactNode
}

const Modal: React.FC<Props> = ({ callback, children }) => {
  const onToggleModal = (): void => {
    callback()
  }

  return (
    <ModalStyle>
      <ModalContent>
        <span className="close-btn" onClick={onToggleModal}>
          &times;
        </span>
        {children}
      </ModalContent>
    </ModalStyle>
  )
}

export default Modal
