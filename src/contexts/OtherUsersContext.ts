import {createContext} from "react";
import {User} from "../types/User";

export const OtherUsersContext = createContext<User[]>([]);