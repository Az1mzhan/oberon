import axios from "axios";
import { useState, useEffect } from "react";
import { UserAuthData } from "../types/UserAuthData";

export const useAuth = (usernameField, passwordField): boolean => {
  const [isCorrectUser, setIsCorrectUser] = useState<boolean>(false);

  useEffect(() => {
    const fetchAuthData = async (): Promise<unknown> => {
      try {
        const res = await axios.get("http://localhost:4000/userIdentification");
        const resMap: Map<string, string> = await new Map<string, string>(
          res.data.map((user: UserAuthData): [string, string] => [
            user.username,
            user.password,
          ])
        );

        if (
          resMap.has(usernameField.username) &&
          resMap.get(usernameField.username) == passwordField.password
        )
          await setIsCorrectUser(true);
      } catch (e) {
        await console.error(e);
      }
    };

    fetchAuthData();
  }, [usernameField.username, passwordField.password]);

  return isCorrectUser;
};
