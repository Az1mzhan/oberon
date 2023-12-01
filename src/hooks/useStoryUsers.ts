import {useEffect, useState} from "react";
import { useSubscriptionUsers } from "./useSubscriptionUsers";
import { User } from "../types/User";

export const useStoryUsers = () => {
  const subscriptionUsers = useSubscriptionUsers();
  const [storyUsers, setStoryUsers] = useState<User[]>(subscriptionUsers);

  useEffect(() => {
      setStoryUsers((prevState: User[]) => prevState.filter((user: User) => user.stories.length !== 0));
  }, [subscriptionUsers]);

  return storyUsers;
};
