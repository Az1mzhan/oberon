import { useState, useEffect } from "react";
import { User } from "../types/User";

export const useFetchedUsers = (): User[] => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async (): Promise<unknown> => {
      try {
        const req = await fetch("http://localhost:4000/users");
        const json = await req.json();
        await setUsers(json);
      } catch (e) {
        console.error(e);
      }
    };

    fetchUsers();
  }, []);

  return users;
};
