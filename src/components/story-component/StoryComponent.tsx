import { FC } from "react";
import { Avatar, Button, Typography, useTheme } from "@mui/material";
import { User } from "../../types/User";
import { Link } from "react-router-dom";
import styles from "./storyComponent.module.css";

interface Props {
  user: User;
}

export const StoryComponent: FC<Props> = ({ user }: Props) => {
  const theme = useTheme();

  return (
    <div className={styles.story}>
      <Button
        component={Link}
        to={`${user.id}`}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15%",
          width: "100%",
          height: "100%",
          paddingTop: "3.75%",
        }}
      >
        <Avatar src={user.avatar} sx={{ width: "3.75vw", height: "3.75vw" }} />
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            fontWeight: "bold",
            textTransform: "initial",
          }}
        >
          {user.username}
        </Typography>
      </Button>
    </div>
  );
};
