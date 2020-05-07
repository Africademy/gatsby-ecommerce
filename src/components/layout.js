import React from "react"
import { createGlobalStyle } from "styled-components"
import Header from "../components/header"
import Cart from "../components/cart"
import Fade from "./fade"
import { useSelector } from "react-redux"

//import "./layout.css"

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

const Layout = ({ children }) => {
  const toggleCart = useSelector(state => state.isCart)
  return (
    <>
      <GlobalStyles />
      <Fade toggleCartProp={toggleCart} />
      <Header />
      <Cart toggleCartProp={toggleCart} />
      {children}
    </>
  )
}

export default Layout
