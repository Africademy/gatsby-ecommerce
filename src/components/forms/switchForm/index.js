import React from "react"
import { SwitchFormWrapper, Title } from "./switchForm.styled"
import { Link } from "gatsby"

const SwitchForm = ({ title, link, cta }) => {
  return (
    <SwitchFormWrapper>
      <Title>{title}</Title>
      <Link to={link}>{cta}</Link>
    </SwitchFormWrapper>
  )
}

export default SwitchForm
