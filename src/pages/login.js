import React, { Component } from "react"
import {
  FormWrapper,
  RightSide,
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
  Btns,
  ReturnBtn,
  CustomCheckbox,
} from "../components/forms/login/login.styled"
import image from "../static/shoulder.jpg"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import { logIn, getUserData } from "../actions"
import SwitchForm from "../components/forms/switchForm"
import LeftSide from "../components/forms/leftSide"

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
  handleGoBack = e => {
    e.preventDefault()
    if (window) {
      window.history.back()
    }
  }
  handleSubmit = e => {
    e.preventDefault()

    const { firstName, surName, email, password } = this.state
    const { dispatch } = this.props
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
      dispatch(logIn())
      dispatch(getUserData(userData))
      this.setState({
        error: "",
        firstName: "",
        surName: "",
        email: "",
        password: "",
        validate: true,
      })
      setTimeout(() => {
        navigate("/")
      }, 500)
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
      <FormWrapper>
        <HeaderlessLayout />
        <LeftSide leftImg={image} centerImg={image} rightImg={image} />
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
                <CustomCheckbox />
                <Label>Show password</Label>
              </TogglePassword>
            </InputContainer>
            <Btns validate={validate}>
              <ReturnBtn
                validate={validate}
                onClick={e => this.handleGoBack(e)}
              >
                Return to home
              </ReturnBtn>
              <SubmitBtn validate={validate} role="submit">
                {validate ? "Success" : "Login"}
              </SubmitBtn>
            </Btns>
            <SwitchForm title={"Don't have account?"} link={"/register"} />
          </Form>
        </RightSide>
      </FormWrapper>
    )
  }
}

export default connect()(Login)
