import { UsersContext } from "../../contexts/UsersContext";
import { PostComponent } from "../../components/PostComponent";
import { CommentComponent } from "../../components/comment-component/CommentComponent";
import { FC, useContext, useState } from "react";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import { Post } from "../../types/Post";
import { User } from "../../types/User";
import {
  Avatar,
  Box,
  IconButton,
  Modal,
  Typography,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { SxProps } from "@mui/system";
import styles from "./postModal.module.css";
import { Comment } from "../../types/Comment";
import { CloseButton } from "../../components/close-button/CloseButton";

const PostModal: FC = () => {
  const theme = useTheme();

  const postModalSxProps: SxProps = {
    backgroundColor: theme.palette.background.default,
  };

  const userTitleBoxSxProps: SxProps = {
    color: theme.palette.text.secondary,
  };

  const postBlockSxProps: SxProps = {
    backgroundColor: theme.palette.background.paper,
  };

  const postComponentSxProps: SxProps = {
    display: "flex",
    width: "50%",
    height: "100%",
  };

  const navigate = useNavigate();
  const { username } = useParams();
  const { postID } = useParams();

  const users = useContext(UsersContext);
  const user: User =
    typeof username === "string"
      ? users.find((user) => user.username === username)
      : (null as User);
  const post: Post =
    typeof postID === "string"
      ? user.posts.find((post) => post.id === parseInt(postID))
      : (null as Post);

  const [open, setOpen] = useState<boolean>(true);

  const handleClose = (): void => {
    setOpen(false);
    navigate(-1);
  };

  return (
    <>
      <Modal className={styles.postModal} open={open} sx={postModalSxProps}>
        <Box className={styles.boxModal}>
          <Box className={styles.closeButtonBox}>
            <CloseButton handleClose={handleClose} />
          </Box>
          <Box className={styles.userTitleBox} sx={userTitleBoxSxProps}>
            <Typography className={styles.usernameTitle} variant="h6">
              <Avatar className={styles.postCreatorAvatar} src={user.avatar} />
              {user.username}
            </Typography>
          </Box>
          <Box className={styles.postBlock} sx={postBlockSxProps}>
            <PostComponent
              key={post.id}
              post={post}
              containerSx={postComponentSxProps}
            />
            <Box className={styles.commentsGroup}>
              {post.comments.map((comment: Comment) => (
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

export default PostModal;
