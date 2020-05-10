import React from "react"
import { EmptyCartWrapper, Message } from "./emptyCart.styled"

const EmptyCart = () => {
  return (
    <EmptyCartWrapper>
      <Message>Your cart is currently empty</Message>
    </EmptyCartWrapper>
  )
}

export default EmptyCart
