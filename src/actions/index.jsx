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
  }
}

export const removeFromCart = product => {
  return {
    type: "REMOVE_FROM_CART",
    payload: product,
  }
}

export const handleModal = product => {
  return {
    type: "HANDLE_MODAL",
    payload: product,
  }
}

export const getUserData = userData => {
  return {
    type: "GET_USER_DATA",
    payload: userData,
  }
}

export const resetCart = () => {
  return {
    type: "RESET_CART",
  }
}
