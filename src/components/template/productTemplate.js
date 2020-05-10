import React, { useState } from "react"
import Layout from "../layout"
import {
  TemplateWrapper,
  TemplateContainer,
  ImageContainer,
  Img,
  DetailsContainer,
  Name,
  Price,
  Description,
  Header,
  Title,
  Content,
  Sizes,
  Size,
  AddToCartBtn,
} from "./productTemplate.styled"
import { colors } from "../../theme"
import { Link } from "gatsby"
import { useDispatch } from "react-redux"
import { addToCart } from "../../actions"

const Template = ({
  location: {
    state: { product },
  },
}) => {
  const dispatch = useDispatch()
  const formatPrice = price => {
    return `$${price * 0.01}`
  }
  const sizeSelect = e => {
    const sizes = document.querySelector("#sizes")
    const sizesList = [...sizes.children]
    sizesList.forEach(size => {
      size.style.backgroundColor = "#fff"
    })
    e.target.style.backgroundColor = colors.cta
  }
  return (
    <Layout>
      <TemplateWrapper>
        <TemplateContainer>
          <ImageContainer>
            <Img src={product.image} alt={product.attributes.name} />
          </ImageContainer>
          <DetailsContainer>
            <Link to="/products">
              <svg
                height={20}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none">
                  <path
                    d="M15 6l-6 6 6 6"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                  />
                </g>
              </svg>
              Products
            </Link>
            <Name>{product.attributes.name}</Name>
            <Price>{formatPrice(product.price)}</Price>
            <Sizes id="sizes">
              <Size onClick={e => sizeSelect(e)}>XS</Size>
              <Size onClick={e => sizeSelect(e)}>S</Size>
              <Size onClick={e => sizeSelect(e)}>M</Size>
              <Size onClick={e => sizeSelect(e)}>L</Size>
              <Size onClick={e => sizeSelect(e)}>XL</Size>
            </Sizes>
            <Description>
              <Header>
                <Title>Description</Title>
              </Header>
              <Content>Lorem ipsum dolor et. Cotton 100%</Content>
            </Description>
            <AddToCartBtn onClick={() => dispatch(addToCart(product))}>
              Add to cart
            </AddToCartBtn>
          </DetailsContainer>
        </TemplateContainer>
      </TemplateWrapper>
    </Layout>
  )
}

export default Template
