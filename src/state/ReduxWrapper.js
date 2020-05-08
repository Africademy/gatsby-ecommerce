import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducers from "../state"
import { ApolloProvider } from "@apollo/react-hooks"
import { client } from "../apollo/client"

export const store = createStore(reducers)

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>{element}</ApolloProvider>
    </Provider>
  )
}
