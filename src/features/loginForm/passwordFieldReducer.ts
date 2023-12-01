export const passwordFieldReducer = (state, action) => {
  if (action.type === "password/change") {
    return { ...state, password: action.nextPassword };
  }
  throw Error("Unknown action");
};
