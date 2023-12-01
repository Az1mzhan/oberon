import { selectUserInfo } from "../../store/userSlice";
import { selectSectionURL } from "./selectSectionURL";
import { selectSectionIcon } from "./selectSectionIcon";
import { ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { User } from "../../types/User";
import { Section } from "../../types/Section";

export type SectionContent = {
  url: string;
  navIcon: ReactElement;
};

export const useSections = (): Map<Section, SectionContent> => {
  const myUser: User = useSelector(selectUserInfo);
  const [sections, setSections] = useState<Section[]>([
    Section.HOME,
    Section.SEARCH,
    Section.POST,
    Section.REELS,
    Section.PROFILE,
  ]);
  const [sectionsMap, setSectionsMap] = useState<Map<Section, SectionContent>>(
    null as Map<Section, SectionContent>
  );

  useEffect(() => {
    const sectionsMap: Map<Section, SectionContent> = new Map<
      Section,
      SectionContent
    >(
      sections.map((section: Section): [Section, SectionContent] => [
        section,
        {
          url: selectSectionURL(section, myUser.username),
          navIcon: selectSectionIcon(section),
        },
      ])
    );

    setSectionsMap(sectionsMap);
  }, []);

  return sectionsMap;
};
