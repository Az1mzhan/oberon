import { Box, Typography, useTheme } from "@mui/material";
import { SxProps } from "@mui/system";
import styles from "./loginSideComponent.module.css";

export const LoginSideComponent = () => {
  const theme = useTheme();
  const sideBoxSxProps: SxProps = {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.paper,
  };
  const headerSxProps: SxProps = {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.main,
  };

  return (
    <>
      <Box className={styles.loginSideComponent} sx={sideBoxSxProps}>
        <Box className={styles.sideBlockTextSection}>
          <Typography
            variant="h3"
            className={styles.loginSideHeader}
            sx={headerSxProps}
          >
            Oberon
          </Typography>
          <Typography variant="h4" className={styles.mottoParagraph}>
            Discover. Connect. Share.
          </Typography>
        </Box>
      </Box>
    </>
  );
};
