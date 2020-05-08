import React, { Component } from "react"
import {
  LoginWrapper,
  LeftSide,
  RightSide,
  ImageContainer,
  Img,
  Form,
  Title,
  Name,
  InputContainer,
  Label,
  Input,
  HeaderlessLayout,
  TogglePassword,
  ToggleVisibility,
  SubmitBtn,
  Error,
} from "../components/forms/login/login.styled"
import image from "../static/shoulder.jpg"
import DispatchLogin from "../components/dispatchLogin"
import { logIn } from "../actions"

class Login extends Component {
  state = {
    firstName: "",
    surName: "",
    email: "",
    password: "",

    togglePass: false,
    passwordType: "password",
    validate: false,
    error: "",
  }
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  togglePassword = () => {
    this.state.togglePass
      ? this.setState({
          passwordType: "password",
          togglePass: !this.state.togglePass,
        })
      : this.setState({
          passwordType: "text",
          togglePass: !this.state.togglePass,
        })
  }
  handleSubmit = e => {
    e.preventDefault()

    const { firstName, surName, email, password } = this.state
    if (firstName === "" || surName === "" || email === "" || password === "") {
      this.setState({ error: "You must fill all fields" })
    } else if (
      firstName !== "" &&
      surName !== "" &&
      email !== "" &&
      password !== ""
    ) {
      const userData = {
        firstName: firstName,
        surName: surName,
        email: email,
        password: password,
      }
      console.log(userData)
      this.setState({
        error: "",
        firstName: "",
        surName: "",
        email: "",
        password: "",
        validate: true,
      })
    }
  }
  render() {
    const {
      validate,
      error,
      firstName,
      surName,
      email,
      password,
      passwordType,
      togglePass,
    } = this.state
    return (
      <LoginWrapper>
        <HeaderlessLayout />
        <LeftSide>
          <ImageContainer>
            <Img src={image} />
          </ImageContainer>
          <ImageContainer>
            <Img src={image} />
          </ImageContainer>
          <ImageContainer>
            <Img src={image} />
          </ImageContainer>
        </LeftSide>
        <RightSide>
          <Form onSubmit={e => this.handleSubmit(e)}>
            <Title>Login</Title>
            <Error error={error}>{error}</Error>
            <Name>
              <InputContainer>
                <Label htmlFor="firstName">Name</Label>
                <Input
                  onChange={e => this.handleInput(e)}
                  name="firstName"
                  type="text"
                  value={firstName}
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="surName">Surname</Label>
                <Input
                  onChange={e => this.handleInput(e)}
                  name="surName"
                  type="text"
                  value={surName}
                />
              </InputContainer>
            </Name>
            <InputContainer>
              <Label htmlFor="email">E-mail address</Label>
              <Input
                onChange={e => this.handleInput(e)}
                name="email"
                type="text"
                value={email}
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="password">Password</Label>
              <Input
                onChange={e => this.handleInput(e)}
                name="password"
                type={passwordType}
                value={password}
              />
              <TogglePassword>
                <ToggleVisibility
                  onChange={() => this.togglePassword()}
                  type="checkbox"
                  checked={togglePass}
                />
                <Label>Show password</Label>
              </TogglePassword>
            </InputContainer>
            <SubmitBtn validate={validate} role="submit">
              {validate ? "Success" : "Login"}
            </SubmitBtn>
          </Form>
        </RightSide>
      </LoginWrapper>
    )
  }
}

export default Login
