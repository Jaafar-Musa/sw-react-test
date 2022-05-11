import "./css/main.css";
import Routing from "./router";
import { Provider } from "react-redux";
import store from "./store";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql";
import React, { Component } from 'react'


export default class App extends Component {
  render() {
    return (
      <div>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Routing />
        </ApolloProvider>
      </Provider>
    </div>
    )
  }
}
