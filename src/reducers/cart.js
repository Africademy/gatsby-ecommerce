export const cart = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const found = state.find(_product => {
        return _product.product.id === action.payload.id
      })
      if (found) {
        found.quantity += 1
      }
      return [...state, { product: action.payload, quantity: 1 }]
    }
    case "REMOVE_FROM_CART": {
      return state.filter(product => {
        return product.product.id !== action.payload.id
      })
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
