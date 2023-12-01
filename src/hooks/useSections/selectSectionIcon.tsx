import { Section } from "../../types/Section";
import { ReactElement } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PostAddIcon from "@mui/icons-material/PostAdd";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export const selectSectionIcon = (section: Section): ReactElement => {
  switch (section) {
    case Section.HOME:
      return <HomeIcon />;
    case Section.SEARCH:
      return <SearchIcon />;
    case Section.POST:
      return <PostAddIcon />;
    case Section.REELS:
      return <MovieFilterIcon />;
    case Section.PROFILE:
      return <AccountBoxIcon />;
  }
};
