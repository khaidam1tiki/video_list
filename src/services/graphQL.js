import {
  ApolloClient, gql
} from "@apollo/client";
import { cache } from "./cache";

const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    cartItems: [ID!]!
  }
`;

const client= new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql",
  typeDefs
});

export default client;

