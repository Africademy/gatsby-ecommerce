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
  top: 0;
  right: 0;
  width: max-content;
  height: max-content;
  background-color: #d7b30c;
  padding: 10px;
`
export const Value = styled.p`
  font-size: 1em;
`
export const Account = styled.div``
