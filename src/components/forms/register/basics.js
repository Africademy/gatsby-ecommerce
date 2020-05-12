import React from "react"
import {
  CustomCheckbox,
  Input,
  InputContainer,
  Label,
  Name,
  TogglePassword,
  ToggleVisibility,
} from "../login/login.styled"

const Basics = ({
  firstName,
  surName,
  email,
  password,
  togglePass,
  togglePassword,
  handleInput,
}) => {
  return (
    <>
      <Name>
        <InputContainer>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            value={firstName}
            onChange={e => handleInput(e)}
            placeholder="eg. John"
            name="firstName"
            type="text"
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="surName">Second Name</Label>
          <Input
            value={surName}
            onChange={e => handleInput(e)}
            placeholder="eg. Smith"
            name="surName"
            type="text"
          />
        </InputContainer>
      </Name>
      <InputContainer>
        <Label htmlFor="email">E-mail address</Label>
        <Input
          value={email}
          onChange={e => handleInput(e)}
          placeholder="example@domain.com"
          name="email"
          type="text"
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="password">Password</Label>
        <Input
          value={password}
          onChange={e => handleInput(e)}
          name="password"
          type="password"
        />
      </InputContainer>
      <TogglePassword>
        <ToggleVisibility
          onChange={() => togglePassword()}
          type="checkbox"
          checked={togglePass}
        />
        <CustomCheckbox />
        <Label>Show password</Label>
      </TogglePassword>
    </>
  )
}

export default Basics
