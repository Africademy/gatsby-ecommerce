import styled from "styled-components"

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
  background-color: #dfdfdf;
  display: flex;
  margin: 0 0 1vw;

  :hover ${RemoveBtn} {
    visibility: visible;
  }
`
export const ProductImage = styled.div`
  width: 30%;
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
`
export const ProductDetails = styled.div`
  width: 70%;
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
  font-size: 1em;
`
