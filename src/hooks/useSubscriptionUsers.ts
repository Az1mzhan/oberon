import { UsersContext } from "../contexts/UsersContext";
import { useState, useContext, useEffect } from "react";
import { selectUserInfo } from "../store/userSlice";
import { useSelector } from "react-redux";
import { User } from "../types/User";

export const useSubscriptionUsers = (): User[] => {
  const users: User[] = useContext(UsersContext);
  const myUser: User = useSelector(selectUserInfo);
  const [subscriptionUsers, setSubscriptionUsers] = useState<User[]>([]);

  useEffect(() => {
    const usersMap: Map<number, User> = new Map<number, User>(
      users.map((user: User): [number, User] => [user.id, user])
    );

    const tempSubscriptionUsers: User[] = [];

    myUser.subscriptions.forEach((userID: number) => {
      tempSubscriptionUsers.push(usersMap.get(userID));
    });

    setSubscriptionUsers([...tempSubscriptionUsers]);
  }, [myUser.subscriptions]);

  return subscriptionUsers;
};
