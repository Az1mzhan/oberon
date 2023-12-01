import { UsersContext } from "../contexts/UsersContext";
import { useState, useEffect, useContext } from "react";
import { User } from "../types/User";

export const useUserById = (userID: number) => {
  const users: User[] = useContext(UsersContext);
  const [targetUser, setTargetUser] = useState<User>(null as User);

  useEffect(() => {
    const usersMap: Map<number, User> = new Map<number, User>(
      users.map((user: User): [number, User] => [user.id, user])
    );

    setTargetUser(usersMap.get(userID));
  }, [users, userID]);

  return targetUser;
};
