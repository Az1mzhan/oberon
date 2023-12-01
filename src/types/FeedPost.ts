import { Post } from "./Post";

type FeedUser = {
  userID: number;
  username: string;
  avatar: string;
};

export type FeedPost = FeedUser & Post;
