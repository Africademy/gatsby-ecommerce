import React, { Component } from "react"
import {
  RegisterSuccessWrapper,
  Content,
  Message,
} from "../../components/forms/register/success.styled"
import { HeaderlessLayout } from "../../components/forms/login/login.styled"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { colors } from "../../theme"
import Logo from "../../components/logo"

class RegisterSuccess extends Component {
  render() {
    return (
      <RegisterSuccessWrapper>
        <Content>
          <HeaderlessLayout />
          <Logo size={"6vh"} />
          <Message>You have successfully registered in shop</Message>
          <AniLink paintDrip duration={1} hex={colors.cta} to="/login">
            Log in
          </AniLink>
        </Content>
      </RegisterSuccessWrapper>
    )
  }
}

export default RegisterSuccess
