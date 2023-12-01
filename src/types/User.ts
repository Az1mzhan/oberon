import { Post } from "./Post";
import { Story } from "./Story";

export type User = {
  id: number;
  username: string;
  avatar: string;
  subscribers: number[];
  subscriptions: number[];
  description: string;
  posts: Post[];
  stories: Story[];
};
