import { UsersContext } from "../../contexts/UsersContext";
import { UserMetrics } from "./user-metrics/UserMetrics";
import { PostsComponent } from "./posts-component/PostsComponent";
import { NavigationBar } from "../../layout/navigation-bar/NavigationBar";
import { FC, useContext } from "react";
import { User } from "../../types/User";
import { Outlet, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import styles from "./profilePage.module.css";

const ProfilePage: FC = () => {
  const otherUsers = useContext(UsersContext);
  const { username } = useParams();
  const user: User =
    typeof username === "string"
      ? otherUsers.find((user) => user.username === username)
      : (null as User);

  return (
    <>
      {user && (
        <Box className={styles.profileSection}>
          <UserMetrics user={user} />
          <PostsComponent user={user} />
          <NavigationBar />
        </Box>
      )}
      <Outlet />
    </>
  );
};

export default ProfilePage;