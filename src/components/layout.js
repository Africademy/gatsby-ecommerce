import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import Header from "../components/header"
import Cart from "../components/cart"
import Fade from "./fade"
import { Helmet } from "react-helmet"
import { useSelector } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"

const GlobalStyles = createGlobalStyle`
  *, :before, :after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }
  a {
    text-decoration: none;
    color: #000000;
  }
`
const LayoutWrapper = styled.main`
  width: 100vw;
  height: auto;
  overflow: initial;
`

const Layout = ({ children }) => {
  const metadata = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const toggleCart = useSelector(state => state.isCart)
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{metadata.site.siteMetadata.title}</title>
        <meta
          name="description"
          content={metadata.site.siteMetadata.description}
        />
      </Helmet>
      <Fade toggleCartProp={toggleCart} />
      <Header />
      <Cart toggleCartProp={toggleCart} />
      {children}
    </LayoutWrapper>
  )
}

export default Layout
