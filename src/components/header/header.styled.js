import styled from "styled-components"

export const HeaderWrapper = styled.header`
  width: 100vw;
  height: 10vh;
  padding: 0 5vw 0;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  background-color: #fff;
  position: sticky;
  z-index: 100;
  top: 0;
  overflow: hidden;
`
export const Nav = styled.nav`
  width: 50%;
`
export const Menage = styled.section`
  width: 20%;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;

  a {
    padding: 20px 40px 20px;
    background-color: #1b1b28;
    color: #fff;
    border-radius: 25px;
  }
`
export const CartBtn = styled.button`
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  cursor: pointer;
  position: relative;

  :focus {
    outline: none;
  }
`
export const ProductAmount = styled.div`
  position: absolute;
  transform: scale(${props => (props.cartLength > 0 ? 1 : 0)});
  transition: 0.3s ease-in-out;
  top: -20%;
  right: -20%;
  width: max-content;
  border-radius: 50px;
  height: max-content;
  background-color: #ffd410;
  padding: 5px 10px 5px;
  font-size: 1.1em;
  font-weight: 600;
`
export const Value = styled.p`
  font-size: 1em;
`
export const Account = styled.div``
