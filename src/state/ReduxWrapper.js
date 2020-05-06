import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducers from "../state"

export const store = createStore(reducers)

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
