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
import { Link } from "gatsby"
import { useDispatch, useSelector } from "react-redux"

const Product = ({ product }) => {
  const formatPrice = price => {
    return `$${price * 0.01}`
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
          <Link to={`/products/${product.id}`} state={{ product }}>
            <Name>{product.attributes.name}</Name>
          </Link>
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
