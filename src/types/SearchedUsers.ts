import { User } from "./User";

export type SearchedUsers = {
  users: User[];
};

export const searchedUsersInitialState: SearchedUsers = {
  users: [],
};
