import React, { Component, createRef } from "react"
import {
  FormWrapper,
  Header,
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
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { connect } from "react-redux"
import { logIn, getUserData } from "../actions"
import SwitchForm from "../components/forms/switchForm"
import LeftSide from "../components/forms/leftSide"
import Logo from "../components/logo"
import gsap, { CSSPlugin } from "gsap"
import { colors } from "../theme"
gsap.registerPlugin(CSSPlugin)

class Login extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      surName: "",
      email: "",
      password: "",

      togglePass: false,
      passwordType: "password",
      validate: false,
      error: "",
    }
    this.form = createRef()
  }
  componentDidMount() {
    if (this.form.current) {
      gsap.from(this.form.current, {
        translateX: "10vw",
        opacity: 0,
        delay: 0.2,
      })
    }
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
    navigate("/")
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
        <Header>
          <AniLink paintDrip duration={0.5} hex={colors.cta} to="/">
            <Logo size={"5vh"} />
          </AniLink>
        </Header>
        <LeftSide leftImg={image} centerImg={image} rightImg={image} />
        <RightSide>
          <Form ref={this.form} onSubmit={e => this.handleSubmit(e)}>
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
                <CustomCheckbox togglePass={togglePass} />
                <Label>Show password</Label>
              </TogglePassword>
            </InputContainer>
            <Btns validate={validate}>
              <ReturnBtn
                validate={validate}
                onClick={e => this.handleGoBack(e)}
              >
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
                Return to home
              </ReturnBtn>
              <SubmitBtn validate={validate} role="submit">
                {validate ? "Success" : "Login"}
              </SubmitBtn>
            </Btns>
            <SwitchForm
              title={"Don't have account?"}
              link={"/register"}
              cta={"Click and get one!"}
            />
          </Form>
        </RightSide>
      </FormWrapper>
    )
  }
}

export default connect()(Login)
