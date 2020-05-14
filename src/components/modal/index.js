import React from "react"
import {
  ModalWrapper,
  ModalContent,
  Title,
  UXText,
  CTAButton,
  Btns,
} from "./modal.styled"
import { useSelector, useDispatch } from "react-redux"
import { handleModal, toggleCart } from "../../actions"
import CartIcon from "../header/cartIcon"
import WalletIcon from "./buyMoreIcon"

const Modal = () => {
  const dispatch = useDispatch()
  const handleCart = () => {
    handleShopping()
    dispatch(toggleCart())
  }
  const handleShopping = () => {
    dispatch(handleModal())
  }
  const modal = useSelector(state => state.modal)
  return (
    <ModalWrapper isOpen={modal}>
      <ModalContent isOpen={modal}>
        <Title>Item added to cart</Title>
        <UXText>What do you want to do now?</UXText>
        <Btns>
          <CTAButton onClick={() => handleCart()}>
            <CartIcon height={20} />
            Order & Pay
          </CTAButton>
          <CTAButton onClick={() => handleShopping()}>
            <WalletIcon height={20} />
            Buy more
          </CTAButton>
        </Btns>
      </ModalContent>
    </ModalWrapper>
  )
}

export default Modal
