import { UsersContext } from "../../contexts/UsersContext";
import CommentComponentSxProps from "./CommentComponentSxProps";
import React, { FC, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Comment } from "../../types/Comment";
import { User } from "../../types/User";
import {
  Box,
  Button,
  Avatar,
  Typography,
  Modal,
  useTheme,
} from "@mui/material";
import { SxProps } from "@mui/system";
import styles from "./commentComponent.module.css";
import { UserInfoComponent } from "../user-info-component/UserInfoComponent";
import { CloseButton } from "../close-button/CloseButton";

interface Props {
  comment: Comment;
}

export const CommentComponent: FC<Props> = ({ comment }: Props) => {
  const theme = useTheme();

  const commentMessageColorSxProps: SxProps = {
    color: `${theme.palette.text.primary} !important`,
  };

  const navigate = useNavigate();

  const users = useContext(UsersContext);
  const user: User = users.find((user) => user.id === comment.userID);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const redirectToProfile = (): void => {
    navigate(`/profile/${user.username}`);
  };

  const openLikedUsersModal = (): void => {
    setIsOpen(true);
  };

  const closeLikedUsersModal = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <Box className={styles.commentComponent}>
        <Button
          className={styles.profileRedirectButton}
          onClick={redirectToProfile}
          sx={{
            ...CommentComponentSxProps.profileRedirectBtnSxProps,
            ...commentMessageColorSxProps,
          }}
          disableRipple
        >
          <Avatar src={user.avatar} />
          <Box className={styles.commentTextData}>
            <Box className={styles.commentCoreComponent}>
              <Typography
                className="commentMessage"
                variant="body2"
                sx={{
                  ...commentMessageColorSxProps,
                  ...CommentComponentSxProps.commentMessageSxProps,
                }}
              >
                {`${user.username}: ${comment.msg}`}
              </Typography>
            </Box>
            <Box className="commentLikesCount">
              <Button onClick={openLikedUsersModal}>
                <Typography
                  variant="body2"
                  sx={{
                    ...commentMessageColorSxProps,
                    ...CommentComponentSxProps.likedUsersBtnTypographySxProps,
                  }}
                >
                  {`Liked: ${comment.likedUsers.length}`}
                </Typography>
              </Button>
            </Box>
          </Box>
        </Button>
      </Box>
      <Modal className="commentsLikesModal" open={isOpen}>
        <Box>
          <Box>
            <CloseButton handleClose={closeLikedUsersModal} />
          </Box>
          <Box>
            <Typography>
              This comment liked by {comment.likedUsers.length} users
            </Typography>
          </Box>
          <Box>
            {comment.likedUsers.map((userID: number) => (
              <UserInfoComponent key={userID} userID={userID} />
            ))}
          </Box>
        </Box>
      </Modal>
    </>
  );
};
