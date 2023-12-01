import FeedPostMainContentSxProps from "./FeedPostMainContentSxProps";
import { useQuantityNoun } from "../../hooks/useQuantityNoun";
import { MediaCarousel } from "../media-carousel/MediaCarousel";
import React, { FC } from "react";
import { FeedPost } from "../../types/FeedPost";
import { Box, Button } from "@mui/material";

interface Props {
  post: FeedPost;
  openModal: (e: React.ChangeEvent<HTMLButtonElement>) => void;
}

export const FeedPostMainContent: FC<Props> = ({ post, openModal }: Props) => {
  const userQuantityNoun: string = useQuantityNoun(
    post.likedUsers.length,
    "user",
    "users"
  );

  return (
    <>
      <Box
        className="feedPostMainContent"
        sx={FeedPostMainContentSxProps.feedPostMainContent}
      >
        <MediaCarousel medias={post.media} width="40.45vw" height="25vw" />
        <Box
          className="feedPostStatistics"
          sx={FeedPostMainContentSxProps.feedPostStatistics}
        >
          <Button
            className="likesModalBtn"
            sx={FeedPostMainContentSxProps.feedPostButtonsSxProps}
            onClick={openModal}
          >
            Liked by {post.likedUsers.length} {userQuantityNoun}
          </Button>
          <Button
            className="commentsModalBtn"
            sx={FeedPostMainContentSxProps.feedPostButtonsSxProps}
            onClick={openModal}
          >
            Show all comments ({post.comments.length})
          </Button>
        </Box>
      </Box>
    </>
  );
};
