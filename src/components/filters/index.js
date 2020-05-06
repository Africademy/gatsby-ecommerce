import React from "react"
import { FiltersWrapper, FilterItem } from "./filters.styled"

const Filters = () => {
  return (
    <FiltersWrapper>
      <FilterItem>Hoodies</FilterItem>
      <FilterItem>T-shirts</FilterItem>
      <FilterItem>Shoulder Bags</FilterItem>
    </FiltersWrapper>
  )
}

export default Filters
