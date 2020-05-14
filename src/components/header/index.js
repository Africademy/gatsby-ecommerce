import React, { useState } from "react"
import {
  HeaderWrapper,
  Nav,
  CartBtn,
  Menage,
  ProductAmount,
  Value,
  BurgerMenuBtn,
  Line,
} from "./header.styled"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useSelector, useDispatch } from "react-redux"
import { toggleCart, handleModal } from "../../actions"
import { store } from "../../state/ReduxWrapper"
import Account from "../account"
import BurgerMenu from "../burgerMenu"
import CartIcon from "./cartIcon"

const Header = () => {
  const logged = useSelector(state => state.isLogged)
  const cart = useSelector(state => state.cart)
  const modal = useSelector(state => state.modal)
  const dispatch = useDispatch()
  const [isMenu, setMenu] = useState(false)

  store.subscribe(() => calculateCart())

  const calculateCart = () => {
    const totalQuantity = cart.reduce((acc, product) => {
      return (acc += product.quantity)
    }, 0)
    return totalQuantity
  }
  const handleCart = () => {
    dispatch(toggleCart())
    if (modal) {
      dispatch(handleModal())
    }
  }
  const handleLink = () => {
    setMenu(!isMenu)
  }

  return (
    <HeaderWrapper id="header">
      <AniLink paintDrip direction="down" duration={1} to="/">
        logo
      </AniLink>
      <Nav>
        <AniLink paintDrip direction="down" duration={1} to="/products">
          Products
        </AniLink>
      </Nav>
      <Menage>
        <CartBtn cartLength={cart.length} onClick={() => handleCart()}>
          <ProductAmount cartLength={cart.length}>
            <Value>{calculateCart()}</Value>
          </ProductAmount>
          <CartIcon height={40} />
        </CartBtn>
        {logged ? <Account /> : <Link to="/login">Log in</Link>}
        <BurgerMenuBtn isMenu={isMenu} onClick={() => setMenu(!isMenu)}>
          <Line />
          <Line />
        </BurgerMenuBtn>
        <BurgerMenu handleLink={handleLink} isMenu={isMenu} />
      </Menage>
    </HeaderWrapper>
  )
}

export default Header
