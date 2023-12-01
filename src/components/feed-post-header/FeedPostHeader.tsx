import FeedPostHeaderSxProps from "./FeedPostHeaderSxProps";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { FeedPost } from "../../types/FeedPost";
import { Avatar, Box, Button, Typography } from "@mui/material";

interface Props {
  post: FeedPost;
}

export const FeedPostHeader: FC<Props> = ({ post }: Props) => {
  const navigate = useNavigate();

  const redirectToProfile = (): void => {
    navigate(`/profile/${post.username}`);
  };

  return (
    <>
      <Box className="feedPostAuthorData">
        <Button
          sx={FeedPostHeaderSxProps.feedPostAuthorDataBtnSxProps}
          onClick={redirectToProfile}
        >
          <Avatar src={post.avatar} />
          <Typography
            variant="body1"
            sx={FeedPostHeaderSxProps.authorUsernameSxProps}
          >
            {post.username}
          </Typography>
        </Button>
      </Box>
    </>
  );
};
