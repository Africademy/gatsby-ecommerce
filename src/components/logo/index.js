import React from "react"
import { LogoImg, LogoWrapper } from "./logo.styled"
import shoes from "../../static/shoes.png"

const Logo = ({ size, isHeader, isMenu }) => {
  return (
    <LogoWrapper isHeader={isHeader} size={size} isMenu={isMenu}>
      <LogoImg src={shoes} />
    </LogoWrapper>
  )
}

export default Logo
