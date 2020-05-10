export const logIn = () => {
  return {
    type: "IS_LOGGED",
  }
}

export const toggleCart = () => {
  return {
    type: "TOGGLE_CART",
  }
}

export const addToCart = product => {
  return {
    type: "ADD_TO_CART",
    payload: product,
    quantity: 1,
  }
}

export const removeFromCart = product => {
  return {
    type: "REMOVE_FROM_CART",
    payload: product,
  }
}
