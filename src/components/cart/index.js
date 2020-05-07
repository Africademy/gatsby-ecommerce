import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleCart } from "../../actions"
import { CartWrapper, CloseCartBtn, Header, CartContent } from "./cart.styled"
import CartProduct from "../cartProduct"

const Cart = ({ toggleCartProp }) => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  return (
    <CartWrapper toggleCart={toggleCartProp}>
      <Header>
        <CloseCartBtn onClick={() => dispatch(toggleCart())}>
          <svg
            height={40}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none">
              <path
                d="M6.757 17.243L12 12m5.243-5.243L12 12m0 0L6.757 6.757M12 12l5.243 5.243"
                stroke="#000000"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        </CloseCartBtn>
      </Header>
      <CartContent>
        {cart.map(product => {
          return <CartProduct product={product} />
        })}
      </CartContent>
    </CartWrapper>
  )
}

export default Cart
