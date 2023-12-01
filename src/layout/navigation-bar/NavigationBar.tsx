import { FC, useState } from "react";
import {
  SectionContent,
  useSections,
} from "../../hooks/useSections/useSections";
import { Link, useLocation } from "react-router-dom";
import { Section } from "../../types/Section";
import {
  BottomNavigation,
  BottomNavigationAction,
  useTheme,
} from "@mui/material";
import { SxProps } from "@mui/system";
import styles from "./navigationBar.module.css";

export const NavigationBar: FC = () => {
  const theme = useTheme();

  const bottomNavigationSxProps: SxProps = {
    backgroundColor: theme.palette.primary.main,
  };

  const location = useLocation();

  const [sections, setSections] = useState<Section[]>([
    Section.HOME,
    Section.SEARCH,
    Section.POST,
    Section.REELS,
    Section.PROFILE,
  ]);
  const sectionsMap: Map<Section, SectionContent> = useSections();

  return (
    <>
      {sectionsMap !== (null as Map<Section, SectionContent>) && (
        <BottomNavigation
          className={styles.bottomNavigation}
          sx={bottomNavigationSxProps}
          value={location.pathname}
        >
          {sections.map((section: Section, ind: number) => (
            <BottomNavigationAction
              component={Link}
              to={sectionsMap.get(section).url}
              key={ind}
              icon={sectionsMap.get(section).navIcon}
            />
          ))}
        </BottomNavigation>
      )}
    </>
  );
};
