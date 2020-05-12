import React from "react"
import { Input, InputContainer, Label } from "../login/login.styled"

const Address = () => {
  return (
    <>
      <InputContainer>
        <Label htmlFor="street">Street</Label>
        <Input name="street" type="text" />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="postalCode">Postal code</Label>
        <Input name="postalCode" type="text" />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="city">City</Label>
        <Input name="city" type="text" />
      </InputContainer>
    </>
  )
}

export default Address
