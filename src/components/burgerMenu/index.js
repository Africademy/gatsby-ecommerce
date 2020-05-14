import React from "react"
import { BurgerWrapper, Menu, NavBtn } from "./burgerMenu.styled"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useSelector } from "react-redux"
import BurgerAccount from "../burgerAccount"

const BurgerMenu = ({ isMenu, handleLink }) => {
  const logged = useSelector(state => state.isLogged)
  return (
    <BurgerWrapper isMenu={isMenu}>
      <Menu isMenu={isMenu}>
        <AniLink cover direction="right" bg="#fff" to="/">
          <NavBtn onClick={() => handleLink()}>Home</NavBtn>
        </AniLink>
        <AniLink cover direction="right" bg="#fff" to="/products">
          <NavBtn onClick={() => handleLink()}>Products</NavBtn>
        </AniLink>
        {logged ? (
          <BurgerAccount logged={logged} />
        ) : (
          <AniLink to="/login">
            <NavBtn onClick={() => handleLink()}>Login</NavBtn>
          </AniLink>
        )}
      </Menu>
    </BurgerWrapper>
  )
}

export default BurgerMenu
