import { InMemoryCache, makeVar } from "@apollo/client";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        launches: {

        },
        isLoggedIn: {
          read() {
            console.log("khai 123 reading isLoggedIn");
            return isLoggedInVar();
          }
        },
        cartItems: {
          read() {
            return cartItemsVar();
          }
        },
      }
    }
  }
});

export const isLoggedInVar = makeVar(false);

export const tokenVar = makeVar();

export const cartItemsVar = makeVar([]);