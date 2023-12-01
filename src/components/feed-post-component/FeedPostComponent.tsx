import { FeedPostHeader } from "../feed-post-header/FeedPostHeader";
import { FeedPostMainContent } from "../feed-post-main-content/FeedPostMainContent";
import { FeedPostLikeModal } from "../feed-post-like-modal/FeedPostLikeModal";
import { FeedPostCommentModal } from "../feed-post-comment-modal/FeedPostCommentModal";
import React, { FC, ReducerState, useReducer } from "react";
import {
  postModalState,
  postModalReducer,
} from "../../features/postModal/postModalReducer";
import { FeedPost } from "../../types/FeedPost";
import { Box } from "@mui/material";
import styles from "./feedPostComponent.module.css";

interface Props {
  post: FeedPost;
}

export const FeedPostComponent: FC<Props> = ({ post }: Props) => {
  const [postModal, dispatchPostModal] = useReducer(postModalReducer, {
    modalName: "",
    isOpened: false,
  } as ReducerState<postModalState>);

  const openModal = (e: React.ChangeEvent<HTMLButtonElement>) => {
    if (e.target.className.includes("likesModalBtn")) {
      dispatchPostModal({
        type: "postModal/openLikesModal",
      });
    } else if (e.target.className.includes("commentsModalBtn")) {
      dispatchPostModal({
        type: "postModal/openCommentsModal",
      });
    }
  };

  const closeModal = (e: React.ChangeEvent<HTMLButtonElement>) => {
    if (e.target.className.includes("likesModalCloseBtn")) {
      dispatchPostModal({
        type: "postModal/closeLikesModal",
      });
    } else if (e.target.className.includes("commentsModalCloseBtn")) {
      dispatchPostModal({
        type: "postModal/closeCommentsModal",
      });
    }
  };

  return (
    <>
      <Box className={styles.feedPost}>
        <FeedPostHeader post={post} />
        <FeedPostMainContent post={post} openModal={openModal} />
      </Box>
      <FeedPostLikeModal
        post={post}
        isOpen={postModal.modalName === "likesModal" && postModal.isOpened}
        onClick={closeModal}
      />
      <FeedPostCommentModal
        post={post}
        isOpen={postModal.modalName === "commentsModal" && postModal.isOpened}
        onClick={closeModal}
      />
    </>
  );
};
