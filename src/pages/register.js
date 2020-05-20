import React, { Component, createRef } from "react"
import {
  FormWrapper,
  HeaderlessLayout,
  Form,
  Title,
  Header,
} from "../components/forms/login/login.styled"
import {
  RegisterFormWrapper,
  Btns,
  NextFields,
  StepBack,
  Error,
} from "../components/forms/register/register.styled"
import LeftSide from "../components/forms/leftSide"
import image from "../static/shoulder.jpg"
import { Link, navigate } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SwitchForm from "../components/forms/switchForm"
import Basics from "../components/forms/register/basics"
import Address from "../components/forms/register/address"
import SkipAddress from "../components/skipAddress"
import Logo from "../components/logo"
import gsap, { CSSPlugin } from "gsap"
import { colors } from "../theme"
gsap.registerPlugin(CSSPlugin)

class Register extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      surName: "",
      email: "",
      password: "",
      street: "",
      postalCode: "",
      city: "",
      country: "",
      togglePass: false,
      step: 1,
      validBasics: false,
      validAddress: false,
      inputType: "password",
      notValid: "",
    }
    this.title = createRef()
  }

  componentDidMount() {
    if (this.title.current) {
      gsap.from(this.title.current, {
        translateY: "2vw",
        opacity: 0,
        delay: 0.1,
      })
    }
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.validateBasics()
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
    const { street, postalCode, city, country } = this.state
    if (street === "" || postalCode === "" || city === "" || country === "") {
      this.setState({ validBasics: false })
    } else {
      if (typeof postalCode !== "number") {
        this.setState({ validBasics: false })
      }
      this.setState({ validBasics: true })
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
        <Header>
          <AniLink paintDrip duration={0.5} hex={colors.cta} to="/">
            <Logo size={"5vh"} />
          </AniLink>
        </Header>
        <LeftSide leftImg={image} centerImg={image} rightImg={image} />
        <RegisterFormWrapper>
          <Form onSubmit={e => this.handleSubmit(e)}>
            <Title ref={this.title}>Register</Title>
            <Error notValid={this.state.notValid}>{this.state.notValid}</Error>
            {this.switchFormSteps()}
            {this.state.step === 2 ? (
              <SkipAddress handleSkipAddress={this.handleSkipAddress} />
            ) : null}
            <Btns>
              {this.state.step === 1 ? (
                <Link to="/">
                  <svg
                    height={20}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none">
                      <path
                        d="M15 6l-6 6 6 6"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                      />
                    </g>
                  </svg>
                  Back to home
                </Link>
              ) : (
                <StepBack onClick={() => this.handleFormSteps()}>
                  Step back
                </StepBack>
              )}
              {this.switchFormBtns()}
            </Btns>
            <SwitchForm
              title={"You already own account?"}
              link="/login"
              cta={"Click and log in!"}
            />
          </Form>
        </RegisterFormWrapper>
      </FormWrapper>
    )
  }
}

export default Register
