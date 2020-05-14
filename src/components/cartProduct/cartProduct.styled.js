import styled from "styled-components"
import { small, medium, large, xlarge } from "../../breakpoints"

export const RemoveBtn = styled.button`
  padding: 15px 30px 15px;
  visibility: hidden;
  font-size: 1em;
  width: max-content;
  cursor: pointer;
  border: none;
  border-radius: 15px;
  background-color: #ff0043;
  color: #fff;

  :focus {
    outline: none;
  }
`
export const CartProductWrapper = styled.div`
  width: 90%;
  height: 20vh;
  background-color: #ffffff;
  display: flex;
  margin: 0 0 1vw;
  border-radius: 15px;
  overflow: hidden;

  :hover ${RemoveBtn} {
    visibility: visible;
  }
`
export const ProductImage = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  overflow: hidden;
`
export const Img = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center center;

  @media all and (max-width: ${xlarge}) {
    height: 100%;
  }
`
export const ProductDetails = styled.div`
  width: 75%;
  height: 100%;
  padding: 1vw;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
`
export const Name = styled.h3`
  font-size: 1.2em;
`
export const Price = styled.p`
  font-size: 1.5em;
  font-weight: 600;
`
export const Quantity = styled.p``
export const Value = styled.span``
