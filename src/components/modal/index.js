import React from "react"
import { ModalWrapper, ModalContent, Title, CTAButton } from "./modal.styled"
import { useSelector } from "react-redux"

const Modal = () => {
  const modal = useSelector(state => state.modal)
  return (
    <ModalWrapper isOpen={modal}>
      <ModalContent>
        <Title>has been added to cart</Title>
        <CTAButton>Order & Pay</CTAButton>
        <CTAButton>Buy more</CTAButton>
      </ModalContent>
    </ModalWrapper>
  )
}

export default Modal
