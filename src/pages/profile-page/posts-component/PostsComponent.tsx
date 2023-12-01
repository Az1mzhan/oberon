import { PostTileGroup } from "../../../components/PostTileGroup";
import { FC } from "react";
import { User } from "../../../types/User";
import { Box } from "@mui/material";
import styles from "./postsComponent.module.css";

interface Props {
  user: User;
}

export const PostsComponent: FC<Props> = ({ user }: Props) => {
  return (
    <Box className={styles.postsBlock}>
      {user.posts.length === 0 ? (
        <p>There aren't publications yet</p>
      ) : (
        <PostTileGroup posts={user.posts} />
      )}
    </Box>
  );
};
