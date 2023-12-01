import { useFeed } from "../../../hooks/useFeed";
import { FeedPostComponent } from "../../../components/feed-post-component/FeedPostComponent";
import { FeedPost } from "../../../types/FeedPost";
import { Box } from "@mui/material";
import styles from "./postFeed.module.css";

export const PostFeed = () => {
  const posts: FeedPost[] = useFeed();

  return (
    <>
      <Box className={styles.postFeed}>
        {posts.map((post: FeedPost) => (
          <FeedPostComponent key={`${post.username}_${post.id}`} post={post} />
        ))}
      </Box>
    </>
  );
};
