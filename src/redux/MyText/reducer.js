const initialState = {
  text: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
  case "CHANGE_TEXT": {
    return action.payload;
  }
  default:
    return state;
  }
}

export default reducer;