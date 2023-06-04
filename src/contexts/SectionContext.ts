import {createContext} from "react";
import {Section} from "../types/Section";

export const SectionContext = createContext<Section>(Section.PROFILE);