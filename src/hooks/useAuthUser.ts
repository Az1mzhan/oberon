import axios from "axios";
import { useState, useEffect } from "react";
import { User } from "../types/User";

export const useAuthUser = (usernameField): User => {
  const [user, setUser] = useState<User>(null as User);

  useEffect(() => {
    const fetchAuthData = async (): Promise<unknown> => {
      try {
        const res = await axios.get("http://localhost:4000/users");
        const resMap: Map<string, User> = await new Map<string, User>(
          res.data.map((user: User): [string, User] => [user.username, user])
        );

        if (resMap.get(usernameField.username) === undefined)
          await setUser(null as User);
        else await setUser(resMap.get(usernameField.username));
      } catch (e) {
        await console.error(e);
      }
    };

    fetchAuthData();
  }, [usernameField.username]);

  return user;
};
