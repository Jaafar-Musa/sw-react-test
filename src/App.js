import "./css/main.css";
import Routing from "./router";
import { Provider } from "react-redux";
import store from "./store";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql";

function App() {
  return (
    <div>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Routing />
        </ApolloProvider>
      </Provider>
    </div>
  );
}

export default App;
