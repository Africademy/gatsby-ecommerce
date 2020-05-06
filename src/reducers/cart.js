export const cart = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return [...state, { key: 1, title: "Hoodie" }]
    }
    default: {
      return state
    }
  }
}
