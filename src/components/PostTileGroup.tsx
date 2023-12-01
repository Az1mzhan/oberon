import { Post } from "../types/Post";
import { FC } from "react";
import { PostTile } from "./post-tile/PostTile";
import { Box } from "@mui/material";

interface Props {
  posts: Post[];
}

export const PostTileGroup: FC<Props> = ({ posts }: Props) => {
  return (
    <Box className="post-tile-group" sx={{ display: "flex", gap: "1.25vw" }}>
      {posts.map((post) => (
        <PostTile key={post.id} post={post} />
      ))}
    </Box>
  );
};
