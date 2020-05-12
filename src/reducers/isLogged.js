export const isLogged = (state = false, action) => {
  switch (action.type) {
    case "IS_LOGGED": {
      return !state
    }
    case "GET_USER_DATA": {
      return { userData: action.payload }
    }
    default: {
      return state
    }
  }
}
