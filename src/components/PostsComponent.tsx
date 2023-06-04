import { FC } from "react";
import { User } from "../types/User";
import { PostTileGroup } from "./PostTileGroup";
import { Box } from "@mui/material";

interface Props {
  user: User;
}

export const PostsComponent: FC<Props> = ({ user }: Props) => {
  return (
    <Box
      className="posts-block"
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10vh",
      }}
    >
      {user.posts.length === 0 ? (
        <p>There aren't publications yet</p>
      ) : (
        <PostTileGroup posts={user.posts} />
      )}
    </Box>
  );
};
