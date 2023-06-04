import { FC, useContext } from "react";
import { OtherUsersContext } from "../contexts/OtherUsersContext";
import { StoryComponent } from "./StoryComponent";
import { UserContext } from "../contexts/UserContext";
import { Box, useTheme } from "@mui/material";

export const StoryPanel: FC = () => {
  const theme = useTheme();
  const users = useContext(OtherUsersContext);
  const myUser = useContext(UserContext);

  return (
    <Box
      className="story-panel"
      sx={{ backgroundColor: theme.palette.background.default }}
    >
      {users.map(
        (user) =>
          user.username !== myUser.username && (
            <StoryComponent isChecked={false} key={user.username} user={user} />
          )
      )}
    </Box>
  );
};
