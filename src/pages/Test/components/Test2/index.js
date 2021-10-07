import store from "../../../../redux/store";
import { changeText } from "../../../../redux/MyText/actions";
import client from "../../../../services/graphQL";
import { gql } from "@apollo/client";
import { isLoggedInVar, tokenVar } from "../../../../services/cache";
// import Stars from "react-native-stars";

Component({
  data: {
    cartItems: [],
  },
  methods: {
    onClick() {
      store.dispatch(changeText("Deft"));
      client
        .query({
          query: gql`
            query TestQuery {
              launch(id: 56) {
                id
                mission {
                  name
                }
              }
            }
          `
        })
        .then(result => console.log(result));
    },
    onSubmitInput(e) {
      store.dispatch(changeText(e.detail.value));
    },
    onClickLogin() {
      const LOGIN_USER = gql`
        mutation Login($email: String!) {
          login(email: $email) {
            id
            token
          }
        }
      `;

      console.log("khai 123 onClickLogin", tokenVar(), isLoggedInVar());

      client.mutate({
        mutation: LOGIN_USER,
        variables: {
          email: "k1@gmail.com"
        }
      }).then(result => {
        const {data: {login: {token}}} = result;
        tokenVar(token);
        isLoggedInVar(true);
      });

      // const [login, {loading, error}] = useMutation(LOGIN_USER);

      // console.log("khai 123 login", login);
      // console.log("khai 123 loading", loading);
      // console.log("khai 123 error", error);
    },
    onClickTestLogin() {
      console.log("khai 123 onClickTestLogin begin");
      const IS_LOGGED_IN = gql`
        query IsUserLoggedIn {
          isLoggedIn @client
        }
      `;

      client.query({
        query: IS_LOGGED_IN
      }).then(result => {
        const {data: {isLoggedIn}} = result;
        console.log("khai 123 onClickTestLogin end", isLoggedIn);
      });
    },
    // onClickReadFromCache() {
    //   console.log("khai 123 onClickReadFromCache");
    //   const IS_LOGGED_IN = gql`
    //     query MyTest {
    //       isLoggedIn
    //     }
    //   `;

    //   const result = client.readQuery({
    //     query: IS_LOGGED_IN
    //   });

    //   console.log(result);
    // },
    async onClickLogOut() {
      client.cache.evict({ fieldName: "isLoggedIn" });
      client.cache.gc();
      isLoggedInVar(false);
      tokenVar(undefined);
      // await client.resetStore();
    }
  }
});