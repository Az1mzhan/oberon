import { useStoryUsers } from "../../../hooks/useStoryUsers";
import { StoryComponent } from "../../../components/story-component/StoryComponent";
import { FC } from "react";
import { User } from "../../../types/User";
import { Box, useTheme } from "@mui/material";
import { SxProps } from "@mui/system";
import styles from "./storyPanel.module.css";
import { AddStoryButton } from "../../../components/add-story-button/AddStoryButton";

export const StoryPanel: FC = () => {
  const theme = useTheme();

  const storyPanelSxProps: SxProps = {
    backgroundColor: theme.palette.primary.main,
  };

  const storyUsers: User[] = useStoryUsers();

  return (
    <>
      <Box className={styles.storyPanel} sx={storyPanelSxProps}>
        <AddStoryButton />
        {storyUsers.map((user) => (
          <StoryComponent isChecked={false} key={user.username} user={user} />
        ))}
      </Box>
    </>
  );
};
