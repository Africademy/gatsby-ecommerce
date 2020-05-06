import React from "react"
import { createGlobalStyle } from "styled-components"
import Header from "../components/header"

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
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
    </>
  )
}

export default Layout
