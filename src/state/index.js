import { combineReducers } from "redux"
import { isLogged } from "../reducers/isLogged"
import { cart, isCart } from "../reducers/cart"
import { modal } from "../reducers/modal"

export default combineReducers({
  isLogged,
  cart,
  isCart,
  modal,
})
