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
  StepBack,
  NotValid,
} from "../components/forms/register/register.styled"
import LeftSide from "../components/forms/leftSide"
import image from "../static/shoulder.jpg"
import { Link, navigate } from "gatsby"
import SwitchForm from "../components/forms/switchForm"
import Basics from "../components/forms/register/basics"
import Address from "../components/forms/register/address"
import SkipAddress from "../components/skipAddress"

class Register extends Component {
  state = {
    firstName: "",
    surName: "",
    email: "",
    password: "",
    street: "",
    postalCode1: "",
    postalCode2: "",
    city: "",
    country: "",
    togglePass: false,
    step: 1,
    validBasics: false,
    validAddress: false,
    inputType: "password",
    notValid: "",
  }
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state.validBasics, "valid")
    if (this.state.validBasics) {
      this.handleFormSteps()
    }
  }
  validateBasics = () => {
    const { firstName, surName, email, password } = this.state
    if (firstName === "" || surName === "" || email === "" || password === "") {
      this.setState({ validBasics: false, notValid: "Please fill fields" })
    } else if (
      firstName !== "" &&
      surName !== "" &&
      email.includes("@" && ".") &&
      password !== ""
    ) {
      this.setState({ validBasics: true, notValid: "" })
    }
  }
  validateAddress = () => {
    const { street, postalCode1, postalCode2, city, country } = this.state
    if (
      street === "" ||
      postalCode1 === "" ||
      postalCode2 === "" ||
      city === "" ||
      country === ""
    ) {
      this.setState({ validBasics: false })
    }
  }
  handlePostalCode = e => {
    if (parseInt(e.target.value) < 100) {
      this.setState({ [e.target.name]: e.target.value })
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
            inputType={this.state.inputType}
          />
        )
      }
      case 2: {
        return (
          <Address
            street={this.state.street}
            postalCode={this.state.postalCode}
            city={this.state.city}
            country={this.state.country}
            handleInput={this.handleInput}
            handlePostalCode={this.handlePostalCode}
            validateAddress={this.validateAddress}
          />
        )
      }

      default: {
        return (
          <Basics
            firstName={this.state.firstName}
            surName={this.state.surName}
            email={this.state.email}
            password={this.state.password}
            togglePass={this.state.togglePass}
            inputType={this.state.inputType}
          />
        )
      }
    }
  }

  switchFormBtns = () => {
    switch (this.state.step) {
      case 1: {
        return (
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
        )
      }
      case 2: {
        return (
          <NextFields role="submit">
            Register
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
        )
      }
      default: {
        return (
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
        )
      }
    }
  }
  handleSkipAddress = e => {
    e.preventDefault()
    navigate("/register/success")
  }
  togglePassword = () => {
    this.state.togglePass
      ? this.setState({
          inputType: "password",
          togglePass: !this.state.togglePass,
        })
      : this.setState({
          inputType: "text",
          togglePass: !this.state.togglePass,
        })
  }

  render() {
    return (
      <FormWrapper>
        <HeaderlessLayout />
        <LeftSide leftImg={image} centerImg={image} rightImg={image} />
        <RegisterFormWrapper>
          <Form
            onChange={() => this.validateBasics()}
            onSubmit={e => this.handleSubmit(e)}
          >
            <Title>Register</Title>
            <p>{this.state.notValid}</p>
            {this.switchFormSteps()}
            {this.state.step === 2 ? (
              <SkipAddress handleSkipAddress={this.handleSkipAddress} />
            ) : null}
            <Btns>
              {this.state.step === 1 ? (
                <Link to="/">Back to home</Link>
              ) : (
                <StepBack onClick={() => this.handleFormSteps()}>
                  Step back
                </StepBack>
              )}
              {this.state.validBasics ? (
                this.switchFormBtns()
              ) : (
                <NotValid>Next step</NotValid>
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
