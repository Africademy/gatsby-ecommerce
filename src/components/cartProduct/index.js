import React from "react"
import {
  CartProductWrapper,
  ProductImage,
  Img,
  ProductDetails,
  Name,
  Price,
  Quantity,
  Value,
  RemoveBtn,
} from "./cartProduct.styled"
import { removeFromCart } from "../../actions"
import { useDispatch } from "react-redux"

const CartProduct = ({ product, formatPrice, quantity }) => {
  const dispatch = useDispatch()

  const handleRemove = (e, product) => {
    e.preventDefault()
    dispatch(removeFromCart(product))
  }
  return (
    <CartProductWrapper key={product.id}>
      <ProductImage>
        <Img src={product.image} alt={product.image} />
      </ProductImage>
      <ProductDetails>
        <Name>{product.attributes.name}</Name>
        <Price>{formatPrice(product.price)}</Price>
        <Quantity>
          Quantity: <Value>{quantity}</Value>
        </Quantity>
        <RemoveBtn onClick={e => handleRemove(e, product)}>Remove</RemoveBtn>
      </ProductDetails>
    </CartProductWrapper>
  )
}

export default CartProduct
