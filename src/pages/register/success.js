import React, { Component } from "react"
import {
  RegisterSuccessWrapper,
  Content,
  Message,
} from "../../components/forms/register/success.styled"
import { HeaderlessLayout } from "../../components/forms/login/login.styled"
import { Link } from "gatsby"

class RegisterSuccess extends Component {
  render() {
    return (
      <RegisterSuccessWrapper>
        <Content>
          <HeaderlessLayout />
          <Message>You have successfully registered in shop</Message>
          <Link to="/login">Log in</Link>
        </Content>
      </RegisterSuccessWrapper>
    )
  }
}

export default RegisterSuccess
