import { Post } from "../types/Post";
import { FC } from "react";
import { MediaCarousel } from "./MediaCarousel";
import { SxProps } from "@mui/system";
import { Box } from "@mui/material";

interface Props {
  post: Post;
  containerSx: SxProps;
}

export const PostComponent: FC<Props> = ({ post, containerSx }: Props) => {
  return (
    <Box className="post" sx={containerSx}>
      <MediaCarousel medias={post.media} />
    </Box>
  );
};
