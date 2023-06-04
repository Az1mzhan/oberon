import { Media } from "./Media";
import { Comment } from "./Comment";

export type Post = {
  id: number;
  media: Media[];
  likedUsers: number[];
  comments: Comment[];
  publicationDate: string;
};
