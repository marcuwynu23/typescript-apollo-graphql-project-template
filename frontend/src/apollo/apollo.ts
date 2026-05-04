import {ApolloClient, InMemoryCache, HttpLink} from "@apollo/client";
const link = new HttpLink({uri: "http://localhost:4000/"});
export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
