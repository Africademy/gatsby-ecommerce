import React, { useState, useEffect } from "react"
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
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useSelector, useDispatch } from "react-redux"
import { toggleCart, handleModal } from "../../actions"
import { colors } from "../../theme"
import { store } from "../../state/ReduxWrapper"
import Account from "../account"
import BurgerMenu from "../burgerMenu"
import CartIcon from "./cartIcon"
import Logo from "../logo"

const Header = () => {
  const logged = useSelector(state => state.isLogged)
  const cart = useSelector(state => state.cart)
  const modal = useSelector(state => state.modal)
  const dispatch = useDispatch()
  const [isMenu, setMenu] = useState(false)
  const [isHeader, setHeader] = useState(false)

  store.subscribe(() => calculateCart())

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 0) {
          setHeader(true)
        } else if (window.pageYOffset <= 0) {
          setHeader(false)
        }
      })
    }
  }, [])

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
    <HeaderWrapper isHeader={isHeader} id="header">
      <AniLink
        paintDrip
        hex={colors.cta}
        direction="down"
        duration={0.7}
        to="/"
      >
        <Logo isMenu={isMenu} isHeader={isHeader} size={"6vh"} />
      </AniLink>
      <Nav>
        <AniLink
          paintDrip
          hex={colors.cta}
          direction="down"
          duration={0.7}
          to="/products"
        >
          Products
        </AniLink>
      </Nav>
      <Menage isHeader={isHeader}>
        <CartBtn
          isHeader={isHeader}
          cartLength={cart.length}
          onClick={() => handleCart()}
        >
          <ProductAmount cartLength={cart.length}>
            <Value>{calculateCart()}</Value>
          </ProductAmount>
          <CartIcon height={40} />
        </CartBtn>
        {logged ? (
          <Account />
        ) : (
          <AniLink cover bg={colors.cta} duration={0.5} to="/login">
            Log in
          </AniLink>
        )}
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
