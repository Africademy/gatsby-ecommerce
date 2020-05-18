import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleCart, resetCart, removeFromCart } from "../../actions"
import {
  CartWrapper,
  CartContainer,
  CloseCartBtn,
  Header,
  RemoveAllBtn,
  CartContent,
  Total,
  CheckoutBtn,
  FillCart,
  Summary,
} from "./cart.styled"
import CartProduct from "../cartProduct"
import EmptyCart from "../emptyCart"
import Trash from "../trashIcon"
import { store } from "../../state/ReduxWrapper"
import { loadStripe } from "@stripe/stripe-js"
import Loading from "../loading"
import { colors } from "../../theme"

const Cart = ({ toggleCartProp }) => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const [redirect, setRedirect] = useState(false)
  const [quantities, setQuantities] = useState(0)

  // TODO update component every time when quantity changes

  const calculateCart = () => {
    const totalQuantity = cart.reduce((acc, product) => {
      return (acc += product.quantity)
    }, 0)
    return setQuantities(totalQuantity)
  }
  const handleRemove = (e, product) => {
    e.preventDefault()
    calculateCart()
    dispatch(removeFromCart(product))
  }
  useEffect(() => {
    console.log("updated")
    cart.forEach(prod => {
      console.log(prod.quantity)
    })
  }, [quantities])

  const formatPrice = price => {
    return `$${price * 0.01}`
  }
  const totalPrice = () => {
    if (cart.length > 0) {
      const total = cart.reduce((acc, product) => {
        return (acc += product.product.price * product.quantity)
      }, 0)
      return total
    }
  }

  store.subscribe(() => totalPrice())

  const handleClose = e => {
    e.preventDefault()
    dispatch(toggleCart())
  }
  const handleCartReset = e => {
    e.preventDefault()
    dispatch(resetCart())
  }

  const handleCheckout = async (e, cart) => {
    e.preventDefault()
    setRedirect(!redirect)
    const sku = cart.map(product => {
      return { sku: product.product.id, quantity: product.quantity }
    })
    const stripe = await loadStripe(
      "pk_test_12OvtkoNyXZih5pqyn0EYvn100iLl3Oay0"
    )
    stripe
      .redirectToCheckout({
        items: sku,
        successUrl: "http://localhost:8000/success",
        cancelUrl: "http://localhost:8000/canceled",
      })
      .then(result => {
        if (result.error) {
          alert(result.error)
        }
      })
  }
  return (
    <CartWrapper toggleCart={toggleCartProp}>
      <CartContainer>
        <Header>
          <CloseCartBtn onClick={e => handleClose(e)}>
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
          <RemoveAllBtn onClick={e => handleCartReset(e)}>
            <Trash width={80} />
          </RemoveAllBtn>
        </Header>
        <CartContent cartLength={cart.length}>
          {cart.length === 0 ? (
            <EmptyCart />
          ) : (
            cart.map(product => {
              return (
                <CartProduct
                  key={product.product.id}
                  product={product.product}
                  quantity={product.quantity}
                  formatPrice={formatPrice}
                  handleRemove={handleRemove}
                />
              )
            })
          )}
          {cart.length > 0 ? (
            <Summary>
              <Total>Total: {formatPrice(totalPrice())}</Total>
              <CheckoutBtn
                redirect={redirect}
                role="submit"
                onClick={e => handleCheckout(e, cart)}
              >
                {redirect ? (
                  <Loading spinnerColor={colors.cta} borderColor={"#000"} />
                ) : (
                  ""
                )}
                Checkout
              </CheckoutBtn>
            </Summary>
          ) : (
            <FillCart onClick={e => handleClose(e)}>
              Find awesome clothes
            </FillCart>
          )}
        </CartContent>
      </CartContainer>
    </CartWrapper>
  )
}

export default Cart
