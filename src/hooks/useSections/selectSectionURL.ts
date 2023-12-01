import { Section } from "../../types/Section";

export const selectSectionURL = (
  section: Section,
  username: string
): string => {
  return section === Section.PROFILE
    ? `/${section}/${username}`
    : `/${section}`;
};
