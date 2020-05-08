import React from "react"
import { FiltersWrapper, FilterItem } from "./filters.styled"
import { Link } from "gatsby"

const Filters = () => {
  return (
    <FiltersWrapper>
      <Link to="/products/hoodies">
        <FilterItem>Hoodies</FilterItem>
      </Link>
      <Link to="/products/tshirts">
        <FilterItem>T-shirts</FilterItem>
      </Link>
      <Link to="/products/shoulder-bags">
        <FilterItem>Shoulder Bags</FilterItem>
      </Link>
      <Link to="/products/shoes">
        <FilterItem>Shoes</FilterItem>
      </Link>
    </FiltersWrapper>
  )
}

export default Filters
