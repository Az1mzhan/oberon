import { User } from "../../types/User";

export const sortUsers = (a: User, b: User): number => {
  if (a.username < b.username) return -1;
  else if (a.username > b.username) return 1;
  return 0;
};
