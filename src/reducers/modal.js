export const modal = (state = false, action) => {
  switch (action.type) {
    case "HANDLE_MODAL": {
      return !state
    }
    default: {
      return state
    }
  }
}
