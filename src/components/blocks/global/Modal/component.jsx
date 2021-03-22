import React from 'react'
import pt from 'prop-types'
import { childrenPropType } from '@/prop-types'

import ModalStyle, { ModalContent } from './styles'

const Modal = ({ callback, children }) => {
  const onToggleModal = () => {
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
