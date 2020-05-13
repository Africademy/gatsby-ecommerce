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
    <HeaderWrapper>
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
