import React from "react"
import { HeaderWrapper, Nav, CartBtn, Menage } from "./header.styled"
import { Link } from "gatsby"
import { useSelector, useDispatch } from "react-redux"
import { toggleCart } from "../../actions"

const Header = () => {
  const logged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <HeaderWrapper>
      <Link to="/">logo</Link>
      <Nav>
        <Link to="/products">Products</Link>
      </Nav>
      <Menage>
        <CartBtn onClick={() => dispatch(toggleCart())}>
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
        {logged ? <p>logged</p> : <Link to="/login">Log in</Link>}
      </Menage>
    </HeaderWrapper>
  )
}

export default Header
