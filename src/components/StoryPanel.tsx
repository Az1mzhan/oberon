import { FC, useContext, useEffect, useState } from "react";
import { UsersContext } from "../contexts/UsersContext";
import { StoryComponent } from "./StoryComponent";
import { MyUserContext } from "../contexts/MyUserContext";
import { Box, useTheme } from "@mui/material";
import { User } from "../types/User";

export const StoryPanel: FC = () => {
  const theme = useTheme();
  const myUser = useContext(MyUserContext);
  const users = useContext(UsersContext);
  const [storyUsers, setStoryUsers] = useState<User[]>([...users]);

  const pickStoryUsers = (): void => {
    console.log("Users: ", users);
  };

  useEffect(pickStoryUsers, []);

  return (
    <Box
      className="story-panel"
      sx={{ backgroundColor: theme.palette.background.default }}
    >
      {storyUsers.map(
        (user) =>
          user.username !== myUser.username && (
            <StoryComponent isChecked={false} key={user.username} user={user} />
          )
      )}
    </Box>
  );
};
