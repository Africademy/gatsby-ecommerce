import React from "react"
import {
  ProductWrapper,
  ProductImageWrapper,
  ProductDetails,
  Img,
  Price,
  Name,
  AddToCart,
} from "./product.styled"
import { loadStripe } from "@stripe/stripe-js"
import { addToCart } from "../../actions"
import { useDispatch, useSelector } from "react-redux"

const Product = ({ product }) => {
  const formatPrice = price => {
    return `$${price * 0.01}`
  }
  const addToCartFunc = async (e, sku) => {
    e.preventDefault()

    const stripe = await loadStripe(
      "pk_test_12OvtkoNyXZih5pqyn0EYvn100iLl3Oay0"
    )
    stripe
      .redirectToCheckout({
        items: [{ sku: sku, quantity: 1 }],

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
  const dispatch = useDispatch()

  const handleCart = (e, product) => {
    e.preventDefault()
    dispatch(addToCart(product))
  }

  return product.nodes.map(product => {
    return (
      <ProductWrapper onSubmit={e => handleCart(e, product)} key={product.id}>
        <ProductImageWrapper>
          <Img src={product.image} alt="" />
        </ProductImageWrapper>
        <ProductDetails>
          <Name>{product.attributes.name}</Name>
          <Price>{formatPrice(product.price)}</Price>
          <AddToCart role="submit">
            <svg
              height={35}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <path
                  d="M6 12h6m6 0h-6m0 0V6m0 6v6"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </AddToCart>
        </ProductDetails>
      </ProductWrapper>
    )
  })
}

export default Product
