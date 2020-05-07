export const cart = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return [...state, action.payload]
    }
    default: {
      return state
    }
  }
}

export const isCart = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_CART": {
      return !state
    }
    default: {
      return state
    }
  }
}
