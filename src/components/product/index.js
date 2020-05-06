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

const Product = ({ product }) => {
  const formatPrice = price => {
    return `$${price * 0.01}`
  }
  return product.map(product => {
    return (
      <ProductWrapper>
        <ProductImageWrapper>
          <Img src={product.node.image} alt="" />
        </ProductImageWrapper>
        <ProductDetails>
          <Name>{product.node.attributes.name}</Name>
          <Price>{formatPrice(product.node.price)}</Price>
          <AddToCart>
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
