import { StoryPanel } from "./story-panel/StoryPanel";
import { PostFeed } from "./post-feed/PostFeed";
import { NavigationBar } from "../../layout/navigation-bar/NavigationBar";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import styles from "./homePage.module.css";

const HomePage: FC = () => {
  return (
    <>
      <Box className={styles.homePage}>
        <StoryPanel />
        <PostFeed />
        <NavigationBar />
      </Box>
      <Outlet />
    </>
  );
};

export default HomePage;
