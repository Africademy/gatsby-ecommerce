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

const CartProduct = ({ product }) => {
  const dispatch = useDispatch()

  const formatPrice = price => {
    return `$${(price * 0.01).toFixed(2)}`
  }
  const handleRemove = (e, product) => {
    e.preventDefault()
    console.log(product.id)
    dispatch(removeFromCart(product))
  }
  return (
    <CartProductWrapper>
      <ProductImage>
        <Img src={product.image} alt={product.image} />
      </ProductImage>
      <ProductDetails>
        <Name>{product.attributes.name}</Name>
        <Price>{formatPrice(product.price)}</Price>
        <Quantity>
          Quantity: <Value>1</Value>
        </Quantity>
        <RemoveBtn onClick={e => handleRemove(e, product)}>Remove</RemoveBtn>
      </ProductDetails>
    </CartProductWrapper>
  )
}

export default CartProduct
