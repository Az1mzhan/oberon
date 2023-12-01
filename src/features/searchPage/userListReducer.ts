export const userListReducer = (state, action) => {
  if (action.type === "userList/filter") {
    return {
      ...state,
      users: action.filteredArray,
    };
  }
  throw Error("Unknown action");
};
