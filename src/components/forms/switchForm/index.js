import React from "react"
import { SwitchFormWrapper, Title } from "./switchForm.styled"
import { Link } from "gatsby"

const SwitchForm = ({ title, link }) => {
  return (
    <SwitchFormWrapper>
      <Title>{title}</Title>
      <Link to={link}>Click and get one!</Link>
    </SwitchFormWrapper>
  )
}

export default SwitchForm
