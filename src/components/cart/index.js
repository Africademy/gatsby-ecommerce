import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleCart } from "../../actions"
import {
  CartWrapper,
  CloseCartBtn,
  Header,
  CartContent,
  CheckoutBtn,
} from "./cart.styled"
import CartProduct from "../cartProduct"
import { loadStripe } from "@stripe/stripe-js"

const Cart = ({ toggleCartProp }) => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  const handleCheckout = async (e, cart) => {
    e.preventDefault()
    const sku = cart.map(product => {
      return { sku: product.id, quantity: 1 }
    })
    console.log(sku)
    const stripe = await loadStripe(
      "pk_test_12OvtkoNyXZih5pqyn0EYvn100iLl3Oay0"
    )
    stripe
      .redirectToCheckout({
        items: sku,

        // https://stripe.com/docs/payments/checkout/fulfillment
        successUrl: "http://localhost:8000/success",
        cancelUrl: "http://localhost:8000/canceled",
      })
      .then(function (result) {
        if (result.error) {
          const displayError = document.getElementById("error-message")
          displayError.textContent = result.error.message
        }
      })
  }

  return (
    <CartWrapper
      onSubmit={e => handleCheckout(e, cart)}
      toggleCart={toggleCartProp}
    >
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
        <CheckoutBtn role="submit">Checkout</CheckoutBtn>
      </CartContent>
    </CartWrapper>
  )
}

export default Cart
