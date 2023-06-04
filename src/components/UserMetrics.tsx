import { FC } from "react";
import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { User } from "../types/User";

interface Props {
  user: User;
}

export const UserMetrics: FC<Props> = ({ user }: Props) => {
  const theme = useTheme();

  return (
    <Box
      className="user-metrics"
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        gap: "25vw",
        paddingBottom: "2.5vh",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.primary.main,
      }}
    >
      <Box
        className="user-title-row"
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Box
          className="profile-main-info"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25vh",
            paddingLeft: ".5vw",
          }}
        >
          <Box
            className="profile-title"
            sx={{ display: "flex", alignItems: "center", gap: ".5vw" }}
          >
            <Avatar
              sx={{
                width: "3.5vw",
                height: "3.5vw",
                margin: "2.5vh .75vw",
                border: `.375vw double ${theme.palette.background.default}`,
              }}
              src={user.avatar}
            />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {user.username}
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ paddingLeft: "1.25vw" }}>
            {user.description}
          </Typography>
        </Box>
      </Box>
      <Box
        className="user-info-block"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Box
          className="user-info-stats"
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "12.5vw",
          }}
        >
          <Box
            sx={{
              margin: "1vh .75vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
              {user.publicationsCount}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: ".75vw" }}>
              {user.publicationsCount === 1 ? "publication" : "publications"}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
              {user.subscribers}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: ".75vw" }}>
              {user.subscribers === 1 ? "subscriber" : "subscribers"}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
              {user.subscriptions}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: ".75vw" }}>
              {user.subscriptions === 1 ? "subscription" : "subscriptions"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
