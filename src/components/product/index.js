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
import { handleModal } from "../../actions"
import { Link } from "gatsby"
import { useDispatch, useSelector } from "react-redux"

const Product = ({ product }) => {
  const formatPrice = price => {
    return `$${price * 0.01}`
  }
  const dispatch = useDispatch()

  const handleAdd = (e, product) => {
    e.preventDefault()
    dispatch(handleModal(product))
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
              height={40}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <path
                  d="M19.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                  fill="#000000"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
                <path
                  d="M9.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                  fill="#000000"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
                <path
                  d="M19.5 19H5.23c-1.784 0-2.73-.781-2.73-2 0-1.219.946-2 2.73-2H7M5 4h17l-2 11H7M5 4l2 11M5 4c-.167-.667-1-2-3-2"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </g>
            </svg>
            Add to cart
          </AddToCart>
        </ProductDetails>
      </ProductWrapper>
    )
  })
}

export default Product
