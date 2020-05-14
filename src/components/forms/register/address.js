import React from "react"
import { Input, InputContainer, Label } from "../login/login.styled"
import {
  PostalCode,
  Number,
  CodeAndCity,
  CityContainer,
  PostalCodeContainer,
} from "./register.styled"

const Address = ({
  street,
  postalCode1,
  postalCode2,
  city,
  country,
  handleInput,
  handlePostalCode,
  validateAddress,
}) => {
  return (
    <>
      <InputContainer>
        <Label htmlFor="street">Street</Label>
        <Input
          value={street}
          onChange={e => handleInput(e)}
          name="street"
          type="text"
        />
      </InputContainer>
      <CodeAndCity>
        <PostalCodeContainer>
          <Label htmlFor="postalCode">Postal code</Label>
          <PostalCode>
            <Number
              placeholder="00"
              value={postalCode1}
              name="postalCode1"
              onChange={e => handlePostalCode(e)}
              max="99"
              type="number"
            />
            -
            <Number
              max="999"
              value={postalCode2}
              onChange={e => handlePostalCode(e)}
              name="postalCode2"
              placeholder="000"
              type="number"
            />
          </PostalCode>
        </PostalCodeContainer>
        <CityContainer>
          <Label htmlFor="city">City</Label>
          <Input
            value={city}
            onChange={e => handleInput(e)}
            name="city"
            type="text"
          />
        </CityContainer>
      </CodeAndCity>
      <InputContainer>
        <Label htmlFor="country">Country</Label>
        <Input
          value={country}
          onChange={e => handleInput(e)}
          name="country"
          type="text"
        />
      </InputContainer>
    </>
  )
}

export default Address
