import { FC, useContext, useState } from "react";
import {
  Avatar,
  Box,
  IconButton,
  Modal,
  Typography,
  useTheme,
} from "@mui/material";
import { Post } from "../types/Post";
import { User } from "../types/User";
import { PostComponent } from "./PostComponent";
import { useNavigate, useParams } from "react-router-dom";
import { UsersContext } from "../contexts/UsersContext";
import CloseIcon from "@mui/icons-material/Close";
import { CommentComponent } from "./CommentComponent";
import { Outlet } from "@mui/icons-material";

export const PostModal: FC = () => {
  const theme = useTheme();

  const navigate = useNavigate();
  const { userID } = useParams();
  const { postID } = useParams();

  const otherUsers = useContext(UsersContext);
  const user: User =
    typeof userID === "string"
      ? otherUsers.find((user) => user.id === parseInt(userID))
      : ({} as User);
  const post: Post =
    typeof postID === "string"
      ? user.posts.find((post) => post.id === parseInt(postID))
      : ({} as Post);

  const [open, setOpen] = useState<boolean>(true);

  const handleClose = (): void => {
    setOpen(false);
    navigate(-1);
  };

  return (
    <>
      <Modal
        className="post-modal"
        open={open}
        sx={{
          backgroundColor: theme.palette.secondary.main,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          className="box-modal"
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "7.5vh",
            gap: "1.25vh",
          }}
        >
          <Box
            className="close-btn-box"
            sx={{ width: "55vw", display: "flex", justifyContent: "flex-end" }}
          >
            <IconButton
              className="close-btn"
              onClick={handleClose}
              size="medium"
              sx={{
                "&:hover": {
                  backgroundColor: "red",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            className="user-title-box"
            sx={{
              width: "55vw",
              height: "10%",
              display: "flex",
              justifyContent: "flex-start",
              color: theme.palette.primary.main,
            }}
          >
            <Typography
              className="username-title"
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1.25vw",
                fontWeight: "bold",
              }}
            >
              <Avatar
                src={user.avatar}
                sx={{ width: "3.25vw", height: "3.25vw" }}
              />
              {user.username}
            </Typography>
          </Box>
          <Box
            className="post-block"
            sx={{
              display: "flex",
              width: "55vw",
              height: "27.5vw",
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <PostComponent
              key={post.id}
              post={post}
              containerSx={{ display: "flex", width: "50%", height: "100%" }}
            />
            <Box sx={{ width: "50%", height: "100%" }}>
              {post.comments.map((comment) => (
                <CommentComponent key={comment.id} comment={comment} />
              ))}
            </Box>
          </Box>
        </Box>
      </Modal>
      <Outlet />
    </>
  );
};
