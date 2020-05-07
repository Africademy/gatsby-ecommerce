import { combineReducers } from "redux"
import { isLogged } from "../reducers/isLogged"
import { cart, isCart } from "../reducers/cart"

export default combineReducers({
  isLogged,
  cart,
  isCart,
})
