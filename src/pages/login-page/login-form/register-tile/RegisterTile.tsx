import { FC } from "react";
import { Paper, Typography } from "@mui/material";
import parentStyles from "../loginForm.module.css";
import selfStyles from "./registerTile.module.css";

export const RegisterTile: FC = () => {
  return (
    <>
      <Paper
        className={`${parentStyles.loginSpaceBlock} ${selfStyles.registerBlock}`}
        elevation={4}
      >
        <Typography variant="body2">
          Don't have an account?{" "}
          <a href="src/pages/login-page/login-form/LoginForm#">Sign up</a>
        </Typography>
      </Paper>
    </>
  );
};
