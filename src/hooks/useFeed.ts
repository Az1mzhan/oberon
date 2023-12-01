import { UsersContext } from "../contexts/UsersContext";
import { useState, useEffect, useContext } from "react";
import { selectUserInfo } from "../store/userSlice";
import { useSelector } from "react-redux";
import { User } from "../types/User";
import { FeedPost } from "../types/FeedPost";

export const useFeed = (): FeedPost[] => {
  const users: User[] = useContext(UsersContext);
  const myUser: User = useSelector(selectUserInfo);
  const [feedPosts, setFeedPosts] = useState<FeedPost[]>([]);

  useEffect(() => {
    const feedUsersMap: Map<number, User> = new Map<number, User>(
      users.map((user: User): [number, User] => [user.id, user])
    );

    const tempFeedPosts: FeedPost[] = [];

    myUser.subscriptions.forEach((userID: number) => {
      const user: User = feedUsersMap.get(userID);

      if (user.posts.length !== 0) {
        tempFeedPosts.push({
          ...user.posts[0],
          userID: user.id,
          username: user.username,
          avatar: user.avatar,
        });
      }
    });

    setFeedPosts([...tempFeedPosts]);

    setFeedPosts((prevState: FeedPost[]) =>
      prevState.filter(
        (feedPost: FeedPost, index: number) =>
          prevState.indexOf(feedPost) === index
      )
    );
  }, [myUser.subscriptions]);

  return feedPosts;
};
