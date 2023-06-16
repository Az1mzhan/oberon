import { FC, useContext } from "react";
import { Comment } from "../types/Comment";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { UsersContext } from "../contexts/UsersContext";
import { User } from "../types/User";
import { useNavigate } from "react-router-dom";

interface Props {
  comment: Comment;
}

export const CommentComponent: FC<Props> = ({ comment }: Props) => {
  const navigate = useNavigate();
  const otherUsers = useContext(UsersContext);
  const user: User = otherUsers.find((user) => user.id === comment.userID);

  const redirectToProfile = (): void => {
    navigate(`/profile/${user.id}`);
  };

  return (
    <Box className="comment-component" sx={{ display: "flex" }}>
      <Button
        onClick={redirectToProfile}
        sx={{ color: "black", textTransform: "initial" }}
      >
        <Avatar src={user.avatar} />
        <Box
          className="comment-text-data"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingLeft: ".5vw",
          }}
        >
          <Box className="comment-core-component" sx={{ textAlign: "start" }}>
            <Typography variant="body2">
              {`${user.username}: ${comment.msg}`}
            </Typography>
          </Box>
          <Box className="comment-likes-cnt">
            <Typography variant="body2">{`Liked: ${comment.likedUsers.length}`}</Typography>
          </Box>
        </Box>
      </Button>
    </Box>
  );
};
