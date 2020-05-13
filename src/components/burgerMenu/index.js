import React from "react"
import { BurgerWrapper, Menu, NavBtn } from "./burgerMenu.styled"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useSelector } from "react-redux"

const BurgerMenu = ({ isMenu, handleLink }) => {
  const logged = useSelector(state => state.isLogged)
  return (
    <BurgerWrapper isMenu={isMenu}>
      <Menu isMenu={isMenu}>
        <AniLink to="/">
          <NavBtn onClick={() => handleLink()}>Home</NavBtn>
        </AniLink>
        <AniLink to="/products">
          <NavBtn onClick={() => handleLink()}>Products</NavBtn>
        </AniLink>
        <AniLink to="/login">
          <NavBtn onClick={() => handleLink()}>Login</NavBtn>
        </AniLink>
      </Menu>
    </BurgerWrapper>
  )
}

export default BurgerMenu
