import UserInfoComponentSxProps from "./UserInfoComponentSxProps";
import { useUserById } from "../../hooks/useUserById";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/User";
import { Box, Button, Avatar, Typography, useTheme } from "@mui/material";
import { SxProps } from "@mui/system";
import styles from "./userInfoComponent.css";

interface Props {
  userID: number;
}

export const UserInfoComponent: FC = ({ userID }: Props) => {
  const theme = useTheme();

  const userInfoColorSxProps: SxProps = {
    color: `${theme.palette.text.primary} !important`,
  };

  const user: User = useUserById(userID);
  const navigate = useNavigate();

  const redirectToUser = (): void => {
    navigate(`/profile/${user.username}`);
  };

  return (
    <>
      {user !== (null as User) && (
        <Box
          className="userInfoContainer"
          sx={UserInfoComponentSxProps.userInfoContainerSxProps}
        >
          <Button
            className="userInfoBtn"
            onClick={redirectToUser}
            sx={UserInfoComponentSxProps.userInfoBtnSxProps}
          >
            <Avatar className="userAvatar" src={user.avatar} />
            <Box>
              <Typography
                className="username"
                variant="body2"
                sx={{
                  ...UserInfoComponentSxProps.usernameSxProps,
                  ...userInfoColorSxProps,
                }}
              >
                {user.username}
              </Typography>
              <Typography
                className="userDescription"
                variant="body2"
                sx={{
                  ...UserInfoComponentSxProps.userDescriptionSxProps,
                  ...userInfoColorSxProps,
                }}
              >
                {user.description}
              </Typography>
            </Box>
          </Button>
        </Box>
      )}
    </>
  );
};
