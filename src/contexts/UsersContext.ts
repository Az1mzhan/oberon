import {createContext} from "react";
import {User} from "../types/User";

export const UsersContext = createContext<User[]>([]);