import React from "react"
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
  AddToCartBtn,
} from "./productTemplate.styled"
import Modal from "../modal"
import { Link } from "gatsby"
import { useDispatch } from "react-redux"
import { addToCart } from "../../actions"
import { handleModal } from "../../actions"

const Template = ({ pageContext }) => {
  const dispatch = useDispatch()
  const formatPrice = price => {
    return `$${price * 0.01}`
  }
  const handleAddItem = product => {
    dispatch(handleModal())
    dispatch(addToCart(product))
  }

  const { product } = pageContext

  return (
    <Layout>
      <TemplateWrapper>
        <Modal />
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
            <Description>
              <Header>
                <Title>Description</Title>
              </Header>
              <Content>Cotton 100%</Content>
            </Description>
            <AddToCartBtn onClick={() => handleAddItem(product)}>
              Add to cart
            </AddToCartBtn>
          </DetailsContainer>
        </TemplateContainer>
      </TemplateWrapper>
    </Layout>
  )
}

export default Template
