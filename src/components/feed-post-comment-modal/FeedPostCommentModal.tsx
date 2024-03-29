import FeedPostCommentModalSxProps from "./FeedPostCommentModalSxProps";
import { CommentComponent } from "../comment-component/CommentComponent";
import React, { FC } from "react";
import { FeedPost } from "../../types/FeedPost";
import { Comment } from "../../types/Comment";
import { Modal, Box, Typography } from "@mui/material";
import { CloseButton } from "../close-button/CloseButton";

interface Props {
  post: FeedPost;
  isOpen: boolean;
  onClick: (e: React.ChangeEvent<HTMLButtonElement>) => void;
}

export const FeedPostCommentModal: FC<Props> = ({
  post,
  isOpen,
  onClick,
}: Props) => {
  return (
    <>
      <Modal className="commentsModal" open={isOpen}>
        <Box
          className="commentsModalContainer"
          sx={FeedPostCommentModalSxProps.commentsModalContainerSxProps}
        >
          <Box
            className="commentsModalCloseBtnContainer"
            sx={
              FeedPostCommentModalSxProps.commentsModalCloseBtnContainerSxProps
            }
          >
            <CloseButton
              className="commentsModalCloseBtn"
              handleClose={onClick}
            />
          </Box>
          <Box
            className="commentsStatistics"
            sx={FeedPostCommentModalSxProps.commentsStatisticsSxProps}
          >
            <Typography
              className="commentsStatisticsTypography"
              sx={FeedPostCommentModalSxProps.postStatisticsSxProps}
            >
              Comments ({post.comments.length})
            </Typography>
          </Box>
          <Box
            className="commentsContainer"
            sx={FeedPostCommentModalSxProps.commentsContainerSxProps}
          >
            {post.comments.map((comment: Comment) => (
              <CommentComponent
                key={`${comment.userID}-${comment.id}`}
                comment={comment}
              />
            ))}
          </Box>
        </Box>
      </Modal>
    </>
  );
};
