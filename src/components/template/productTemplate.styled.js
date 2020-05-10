import styled from "styled-components"
import { colors } from "../../theme"

export const TemplateWrapper = styled.main`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
`
export const TemplateContainer = styled.section`
  width: 70%;
  height: 100%;
  display: flex;
`
export const ImageContainer = styled.section`
  width: 50%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
`
export const Img = styled.img`
  height: 100%;
  object-fit: cover;
`

export const DetailsContainer = styled.section`
  width: 50%;
  height: 100%;
  padding: 3vw;

  a {
    padding: 5px 10px 5px;
    font-size: 1em;
    border-radius: 50px;
    background-color: #e7e7e7;
    font-weight: 500;
    display: flex;
    align-items: center;
    -webkit-align-items: center;
    width: max-content;
  }
`
export const Name = styled.h3`
  font-size: 2.5em;
  margin: 0 0 2vw;
`
export const Price = styled.p`
  font-size: 1.5em;
  margin: 0 0 2vw;
`
export const Sizes = styled.div`
  width: 100%;
  height: 50px;
  overflow: scroll;
  display: flex;
  margin: 0 0 1vw;
`
export const Size = styled.button`
  width: max-content;
  min-width: 40px;
  height: 50px;
  font-weight: 600;
  padding: 5px 20px 5px;
  border-radius: 50px;
  margin: 0 1vw 0 0;
  font-size: 1em;
  border: 2px solid ${colors.cta};
  cursor: pointer;
  :focus {
    outline: none;
  }
`
export const Description = styled.button`
  width: 100%;
  height: auto;
  background-color: #f1f1f1;
  overflow: hidden;
  font-size: 1em;
  border-radius: 10px;
  border: none;
  text-align: left;
  transition: 0.3s ease-in-out;

  :focus {
    outline: none;
  }
`
export const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  padding: 1vw;
  background-color: #e9e9e9;
`
export const Title = styled.p`
  font-size: 1.1em;
`
export const Content = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
`
export const AddToCartBtn = styled.button`
  border: none;
  padding: 20px 40px 20px;
  border-radius: 10px;
  font-size: 1.1em;
  font-weight: 500;
  width: max-content;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  background-color: ${colors.cta};
  margin: 2vw 0 0;
  cursor: pointer;

  :focus {
    outline: none;
  }
`
