import styled, { keyframes } from "styled-components"
import { small, medium, large } from "../../breakpoints"

const addToAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`
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
  height: 3.5vw;
  width: 3.5vw;
  background-color: #d7d7d7;
  border-radius: 50px;
  position: absolute;
  z-index: 2;
  bottom: 1vw;
  right: 1vw;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  :focus {
    outline: none;
  }
  svg {
    transition: 0.2s ease-in-out;
  }
  :hover {
    background-color: #0f7dff;
    transition: 0.2s ease-in-out;
  }
  :hover:before {
    opacity: 1;
  }
  :hover svg {
    animation: 0.2s ${addToAnimation} linear;
  }

  @media all and (max-width: ${medium}) {
    width: 100%;
    height: 60px;
    position: relative;
    right: 0;
  }
  @media all and (min-width: ${medium}) and (max-width: ${large}) {
    width: 90%;
    position: absolute;

    left: 50%;
    margin-left: -45%;
    height: 60px;
    bottom: 2vw;
  }
`
