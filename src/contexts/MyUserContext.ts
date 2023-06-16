import {createContext} from "react";
import {User} from "../types/User";

export const MyUserContext = createContext<User>({} as User);