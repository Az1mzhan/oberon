export const usernameFieldReducer = (state, action) => {
  if (action.type === "username/change") {
    return { ...state, username: action.nextUsername };
  }
  throw Error("Unknown action");
};
