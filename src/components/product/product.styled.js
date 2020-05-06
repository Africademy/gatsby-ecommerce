import styled from "styled-components"

export const Img = styled.img`
  height: 100%;
  width: auto;
  object-fit: cover;
  object-position: center center;
  transition: 0.3s ease-in-out;
`
export const ProductWrapper = styled.div`
  width: 100%;
  height: 40vh;
  background-color: #ffffff;
  display: flex;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 1.1px 2.2px -10px rgba(0, 0, 0, 0.008),
    0 2.6px 5.3px -10px rgba(0, 0, 0, 0.012),
    0 4.9px 10px -10px rgba(0, 0, 0, 0.015),
    0 8.7px 17.9px -10px rgba(0, 0, 0, 0.018),
    0 16.3px 33.4px -10px rgba(0, 0, 0, 0.022),
    0 39px 80px -10px rgba(0, 0, 0, 0.03);

  :hover ${Img} {
    height: 110%;
    transition: 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }
`
export const ProductImageWrapper = styled.div`
  width: 50%;
  height: 100%;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
`
export const ProductDetails = styled.div`
  width: 50%;
  height: 100%;
  padding: 1vw;
  position: relative;
`
export const Price = styled.p``
export const Name = styled.h3``
export const AddToCart = styled.button`
  height: 3.5vw;
  width: 3.5vw;
  background-color: #d7d7d7;
  border-radius: 50px;
  position: absolute;
  bottom: 1vw;
  right: 1vw;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  :focus {
    outline: none;
  }
`
