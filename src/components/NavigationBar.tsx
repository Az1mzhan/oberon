import { FC, ReactElement, useContext } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  useTheme,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PostAddIcon from "@mui/icons-material/PostAdd";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Section } from "../types/Section";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export const NavigationBar: FC = () => {
  const user = useContext(UserContext);
  const theme = useTheme();
  const sections: Section[] = [
    Section.HOME,
    Section.SEARCH,
    Section.POST,
    Section.REELS,
    Section.PROFILE,
  ];

  const selectSection = (sec: Section): ReactElement => {
    switch (sec) {
      case Section.HOME:
        return <HomeIcon sx={{ color: theme.palette.primary.main }} />;
      case Section.SEARCH:
        return <SearchIcon sx={{ color: theme.palette.primary.main }} />;
      case Section.POST:
        return <PostAddIcon sx={{ color: theme.palette.primary.main }} />;
      case Section.REELS:
        return <MovieFilterIcon sx={{ color: theme.palette.primary.main }} />;
      case Section.PROFILE:
        return <AccountBoxIcon sx={{ color: theme.palette.primary.main }} />;
    }
  };

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.palette.background.default,
      }}
      value={useLocation().pathname}
    >
      {sections.map((section: Section, ind: number) => (
        <BottomNavigationAction
          component={Link}
          to={
            section === Section.PROFILE
              ? `/${section}/${user.id}`
              : `/${section}`
          }
          key={ind}
          icon={selectSection(section)}
        />
      ))}
    </BottomNavigation>
  );
};
