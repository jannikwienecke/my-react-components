import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider, Query } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";

import { AUTH_TOKEN } from "./constants";
import App from "./App";
import { setInitData } from "./baseComponents/store/actions";

import { useDispatch } from "react-redux";
import { INIT_QUERY } from "./queries";

const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNTg3NzQ2NzM1LCJvcmlnSWF0IjoxNTg3NzQ2NDM1fQ.fcLcbmwddG1AQtMQsFNosTpbztQmG3bXe0LU-C6GZ2s";
const httpLink = createHttpLink({
  uri: "http://localhost:8000/graphql/",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      // authorization: token ? `JWT ${token}` : "",
      authorization: TOKEN ? `JWT ${TOKEN}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
// ReactDOM.render(<App />, document.getElementById("root"));
