import React from "react"
import {
  CartProductWrapper,
  ProductImage,
  Img,
  ProductDetails,
  Name,
  Price,
  RemoveBtn,
} from "./cartProduct.styled"

const CartProduct = ({ product }) => {
  const formatPrice = price => {
    return `$${(price * 0.01).toFixed(2)}`
  }
  return (
    <CartProductWrapper>
      <ProductImage>
        <Img src={product.image} alt={product.image} />
      </ProductImage>
      <ProductDetails>
        <Name>{product.attributes.name}</Name>
        <Price>{formatPrice(product.price)}</Price>
        <RemoveBtn>Remove</RemoveBtn>
      </ProductDetails>
    </CartProductWrapper>
  )
}

export default CartProduct
