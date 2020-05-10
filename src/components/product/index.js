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
import { addToCart } from "../../actions"
import { Link } from "gatsby"
import { useDispatch } from "react-redux"

const Product = ({ product }) => {
  const formatPrice = price => {
    return `$${price * 0.01}`
  }
  const dispatch = useDispatch()

  const handleAdd = (e, product) => {
    e.preventDefault()
    dispatch(addToCart(product))
  }

  return product.nodes.map(product => {
    return (
      <ProductWrapper onSubmit={e => handleAdd(e, product)} key={product.id}>
        <ProductImageWrapper>
          <Img src={product.image} alt="" />
        </ProductImageWrapper>
        <ProductDetails>
          <Link to={`/products/${product.id}`} state={{ product }}>
            <Name>{product.attributes.name}</Name>
          </Link>
          <Price>{formatPrice(product.price)}</Price>
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
