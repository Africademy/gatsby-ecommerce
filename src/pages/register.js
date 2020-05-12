import React, { Component } from "react"
import {
  FormWrapper,
  HeaderlessLayout,
  Form,
  Title,
} from "../components/forms/login/login.styled"
import {
  RegisterFormWrapper,
  Btns,
  NextFields,
} from "../components/forms/register/register.styled"
import LeftSide from "../components/forms/leftSide"
import image from "../static/shoulder.jpg"
import { Link } from "gatsby"
import SwitchForm from "../components/forms/switchForm"
import Basics from "../components/forms/register/basics"
import Address from "../components/forms/register/address"

class Register extends Component {
  state = {
    firstName: "",
    surName: "",
    email: "",
    password: "",
    togglePass: false,
    step: 1,
    validBasics: false,
    validAddress: false,
  }
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit = e => {
    // TODO submit is not working (validation)
    e.preventDefault()
    console.log(this.state.validBasics, "valid")
    this.validateBasics()
    if (this.state.validBasics) {
      this.handleFormSteps()
    }
  }
  validateBasics = () => {
    const { firstName, surName, email, password } = this.state
    if (firstName !== "" && surName !== "" && email !== "" && password !== "") {
      this.setState({ validBasics: true })
    } else {
      this.setState({ validBasics: false })
    }
  }
  handleFormSteps = () => {
    if (this.state.step === 1) {
      this.setState(prevState => ({
        step: prevState.step + 1,
      }))
    } else if (this.state.step > 2) {
      this.setState({ step: 1 })
    } else {
      this.setState(prevState => ({
        step: prevState.step - 1,
      }))
    }
  }

  switchFormSteps = () => {
    switch (this.state.step) {
      case 1: {
        return (
          <Basics
            firstName={this.state.firstName}
            surName={this.state.surName}
            email={this.state.email}
            password={this.state.password}
            togglePass={this.state.togglePass}
            togglePassword={this.togglePassword}
            handleInput={this.handleInput}
          />
        )
      }
      case 2: {
        return <Address />
      }

      default: {
        return (
          <Basics
            firstName={this.state.firstName}
            surName={this.state.surName}
            email={this.state.email}
            password={this.state.password}
            togglePass={this.state.togglePass}
          />
        )
      }
    }
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
  render() {
    return (
      <FormWrapper>
        <HeaderlessLayout />
        <LeftSide leftImg={image} centerImg={image} rightImg={image} />
        <RegisterFormWrapper>
          <Form onSubmit={e => this.handleSubmit(e)}>
            <Title>Register</Title>
            {this.switchFormSteps()}
            <Btns>
              {this.state.step === 1 ? (
                <Link to="/">Back to home</Link>
              ) : (
                <button onClick={() => this.handleFormSteps()}>
                  Step back
                </button>
              )}
              {this.state.validBasics ? (
                <NextFields role="submit">
                  Add address
                  <svg
                    height={30}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none">
                      <path
                        d="M9 6l6 6-6 6"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                      />
                    </g>
                  </svg>
                </NextFields>
              ) : (
                <NextFields disabled role="submit">
                  Add address
                  <svg
                    height={30}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none">
                      <path
                        d="M9 6l6 6-6 6"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                      />
                    </g>
                  </svg>
                </NextFields>
              )}
            </Btns>
            <SwitchForm title={"You already own account?"} link="/login" />
          </Form>
        </RegisterFormWrapper>
      </FormWrapper>
    )
  }
}

export default Register
