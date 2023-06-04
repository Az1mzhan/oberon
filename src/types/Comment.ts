export type Comment = {
  id: number;
  userID: number;
  msg: string;
  likedUsers: number[];
  publicationData: Date;
};
