import styled from "styled-components"
import { small, medium, large } from "../../breakpoints"
import { colors } from "../../theme"

export const Img = styled.img`
  height: 100%;
  width: auto;
  object-fit: cover;
  object-position: center center;
  transition: 0.3s ease-in-out;

  @media all and (max-width: ${medium}) {
    width: 100%;
    object-position: 0 center;
  }
`
export const ProductWrapper = styled.form`
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

  @media all and (max-width: ${small}) {
    flex-flow: column;
    -webkit-flex-flow: column;
    height: 50vh;
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    flex-flow: column;
    -webkit-flex-flow: column;
    height: 45vh;
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

  @media all and (max-width: ${medium}) {
    width: 100%;
    height: 60%;
  }
`
export const ProductDetails = styled.div`
  width: 50%;
  height: 100%;
  padding: 1vw;
  position: relative;

  @media all and (max-width: ${medium}) {
    width: 100%;
    height: 40%;
    display: flex;
    flex-flow: column;
    -webkit-flex-flow: column;
    justify-content: space-between;
    -webkit-justify-content: space-between;
  }
`
export const Name = styled.h3`
  height: 20%;
  font-size: 1.3em;

  @media all and (max-width: ${small}) {
    font-size: 1.5em;
  }
`
export const Price = styled.p`
  font-size: 1.2em;

  @media all and (max-width: ${small}) {
    font-size: 1.3em;
  }
`
export const AddToCart = styled.button`
  width: 110%;
  height: 60px;
  background-color: ${colors.cta};
  border-radius: 30px 0 0 0;
  position: absolute;
  z-index: 2;
  bottom: 0;
  right: 0;
  font-size: 1.1em;
  font-weight: 600;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  overflow: hidden;
  :focus {
    outline: none;
  }
  svg {
    height: 50%;
    margin: 0 10px 0 0;
    transition: 0.4s ease-in-out;
  }
  :hover {
    transition: 0.2s ease-in-out;
    box-shadow: 0 0 1.9px -10px rgba(0, 0, 0, 0.039),
      0 0 4.3px -10px rgba(0, 0, 0, 0.056), 0 0 7.7px -10px rgba(0, 0, 0, 0.069),
      0 0 12.8px -10px rgba(0, 0, 0, 0.081),
      0 0 21.2px -10px rgba(0, 0, 0, 0.094), 0 0 37px -10px rgba(0, 0, 0, 0.111),
      0 0 80px -10px rgba(0, 0, 0, 0.15);
    color: transparent;

    svg {
      transform: translateX(7vw);
      transition: 0.4s ease-in-out;
    }
  }

  @media all and (max-width: ${small}) {
    width: 100%;
    position: relative;
    border-radius: 50px;
    :hover {
      transform: none;
    }
  }
  @media all and (min-width: ${small}) and (max-width: ${medium}) {
    width: 100%;
    position: relative;
    border-radius: 50px;
    :hover {
      transform: none;
    }
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 110%;
    position: absolute;

    right: 0;
    height: 60px;
    bottom: 0;
  }
`
