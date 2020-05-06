import { combineReducers } from "redux"
import { isLogged } from "../reducers/isLogged"
import { cart } from "../reducers/cart"

export default combineReducers({
  isLogged,
  cart,
})
