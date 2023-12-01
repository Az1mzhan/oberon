import FeedPostHeaderSxProps from "./FeedPostHeaderSxProps";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { FeedPost } from "../../types/FeedPost";
import { Avatar, Box, Button, Typography, useTheme } from "@mui/material";
import { SxProps } from "@mui/system";

interface Props {
  post: FeedPost;
}

export const FeedPostHeader: FC<Props> = ({ post }: Props) => {
  const theme = useTheme();

  const fontColorSxProps: SxProps = {
    color: theme.palette.text.secondary,
  };

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
            sx={{
              ...FeedPostHeaderSxProps.authorUsernameSxProps,
              ...fontColorSxProps,
            }}
          >
            {post.username}
          </Typography>
        </Button>
      </Box>
    </>
  );
};
