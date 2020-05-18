import React, { useRef, useEffect } from "react"
import { Input, InputContainer, Label } from "../login/login.styled"
import {
  PostalCode,
  Number,
  CodeAndCity,
  CityContainer,
  PostalCodeContainer,
} from "./register.styled"
import gsap, { CSSPlugin } from "gsap"

const Address = ({
  street,
  postalCode,
  city,
  country,
  handleInput,
  handlePostalCode,
  validateAddress,
}) => {
  const form = useRef()
  useEffect(() => {
    gsap.from(form.current, {
      translateX: "10vw",
      opacity: 0,
    })
  }, [])
  return (
    <section ref={form}>
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
              placeholder="00-000"
              value={postalCode}
              name="postalCode1"
              onChange={e => handlePostalCode(e)}
              type="text"
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
    </section>
  )
}

export default Address
