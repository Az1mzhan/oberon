import FeedPostLikeModalSxProps from "./FeedPostLikeModalSxProps";
import { UserInfoComponent } from "../user-info-component/UserInfoComponent";
import React, { FC } from "react";
import { FeedPost } from "../../types/FeedPost";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  post: FeedPost;
  isOpen: boolean;
  onClick: (e: React.ChangeEvent<HTMLButtonElement>) => void;
}

export const FeedPostLikeModal: FC<Props> = ({
  post,
  isOpen,
  onClick,
}: Props) => {
  return (
    <>
      <Modal className="likesModal" open={isOpen}>
        <Box
          className="likesModalContainer"
          sx={FeedPostLikeModalSxProps.likesModalContainerSxProps}
        >
          <Box
            className="likesModalCloseBtnContainer"
            sx={FeedPostLikeModalSxProps.likesModalCloseBtnContainerSxProps}
          >
            <IconButton
              className="likesModalCloseBtn"
              onClick={onClick}
              children={<CloseIcon />}
              sx={FeedPostLikeModalSxProps.closeModalBtnSxProps}
            />
          </Box>
          <Box
            className="likesStatistics"
            sx={FeedPostLikeModalSxProps.likesStatisticsSxProps}
          >
            <Typography
              className="likeStatisticsTypography"
              sx={FeedPostLikeModalSxProps.postStatisticsSxProps}
            >
              Liked by {post.likedUsers.length} users
            </Typography>
          </Box>
          <Box
            className="likesContainer"
            sx={FeedPostLikeModalSxProps.likesContainerSxProps}
          >
            {post.likedUsers.map((userID: number) => (
              <UserInfoComponent key={userID} userID={userID} />
            ))}
          </Box>
        </Box>
      </Modal>
    </>
  );
};
