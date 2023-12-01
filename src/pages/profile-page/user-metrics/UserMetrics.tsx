import { useQuantityNoun } from "../../../hooks/useQuantityNoun";
import { FC } from "react";
import { User } from "../../../types/User";
import { SxProps } from "@mui/system";
import { Avatar, Box, Paper, Typography, useTheme } from "@mui/material";
import styles from "./userMetrics.module.css";

interface Props {
  user: User;
}

export const UserMetrics: FC<Props> = ({ user }: Props) => {
  const theme = useTheme();

  const userMetricsSxProps: SxProps = {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.secondary,
    borderRadius: 0,
  };

  const bolderMetricsTextSxProps: SxProps = {
    fontWeight: "bolder",
  };

  const userStatsQuantitySxProps: SxProps = {
    fontSize: ".75rem",
  };

  const publicationsQuantity = useQuantityNoun(
    user.posts.length,
    "publication",
    "publications"
  );
  const subscribersQuantity = useQuantityNoun(
    user.subscribers.length,
    "subscriber",
    "subscribers"
  );
  const subscriptionsQuantity = useQuantityNoun(
    user.subscriptions.length,
    "subscription",
    "subscriptions"
  );

  return (
    <Paper className={styles.userMetrics} sx={userMetricsSxProps} elevation={4}>
      <Box className={styles.userTitleRow}>
        <Box className={styles.profileMainInfo}>
          <Box className={styles.profileTitle}>
            <Avatar className={styles.userAvatar} src={user.avatar} />
            <Typography variant="h6" sx={bolderMetricsTextSxProps}>
              {user.username}
            </Typography>
          </Box>
          <Typography variant="body1">{user.description}</Typography>
        </Box>
      </Box>
      <Box className={styles.userInfoBlock}>
        <Box className={styles.userInfoStats}>
          <Box className={styles.userPublicationsStats}>
            <Typography variant="h6" sx={bolderMetricsTextSxProps}>
              {user.posts.length}
            </Typography>
            <Typography variant="body1" sx={userStatsQuantitySxProps}>
              {publicationsQuantity}
            </Typography>
          </Box>
          <Box className={styles.userSubscribersStats}>
            <Typography variant="h6" sx={bolderMetricsTextSxProps}>
              {user.subscribers.length}
            </Typography>
            <Typography variant="body1" sx={userStatsQuantitySxProps}>
              {subscribersQuantity}
            </Typography>
          </Box>
          <Box className={styles.userSubscriptionsStats}>
            <Typography variant="h6" sx={bolderMetricsTextSxProps}>
              {user.subscriptions.length}
            </Typography>
            <Typography variant="body1" sx={userStatsQuantitySxProps}>
              {subscriptionsQuantity}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
