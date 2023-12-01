import { login } from "../../../store/userSlice";
import { useAuth } from "../../../hooks/useAuth";
import { useAuthUser } from "../../../hooks/useAuthUser";
import { usernameFieldReducer } from "../../../features/loginForm/usernameFieldReducer";
import { passwordFieldReducer } from "../../../features/loginForm/passwordFieldReducer";
import { RegisterTile } from "./register-tile/RegisterTile";
import { ErrorText } from "../../../components/error-text/ErrorText";
import { FC, ReducerState, useState, useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { User } from "../../../types/User";
import { Password, Username } from "../../../types/UserAuthData";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { SxProps } from "@mui/system";
import styles from "./loginForm.module.css";

export const LoginForm: FC = () => {
  const theme = useTheme();

  const CheckboxSxProps: SxProps = {
    color: theme.palette.text.primary,
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isValid, setIsValid] = useState<boolean>(false);

  const [usernameField, dispatchUsernameField] = useReducer(
    usernameFieldReducer,
    {
      username: "",
    } as ReducerState<Username>
  );

  const [passwordField, dispatchPasswordField] = useReducer(
    passwordFieldReducer,
    {
      password: "",
    } as ReducerState<Password>
  );

  const isCorrectUser: boolean = useAuth(usernameField, passwordField);
  const user: User = useAuthUser(usernameField);

  const handleUsername = (e: React.FormEvent<HTMLInputElement>): void => {
    dispatchUsernameField({
      type: "username/change",
      nextUsername: e.currentTarget.value,
    });
  };

  const handlePassword = (e: React.FormEvent<HTMLInputElement>): void => {
    dispatchPasswordField({
      type: "password/change",
      nextPassword: e.currentTarget.value,
    });
  };

  const validateUser = () => {
    if (isCorrectUser) {
      dispatch(login(user));
      navigate("/home");
    } else {
      setIsValid(true);
      setTimeout(() => {
        setIsValid(false);
      }, 2500);
    }
  };

  return (
    <>
      <Box className={styles.loginSpace}>
        <Paper
          className={`${styles.loginSpaceBlock} ${styles.loginBlock}`}
          elevation={4}
        >
          <Typography variant="h6" className={styles.loginHeader}>
            Login
          </Typography>
          <TextField
            error={isValid}
            label="Username"
            variant="outlined"
            required
            onChange={(e) => handleUsername(e)}
          ></TextField>
          <TextField
            error={isValid}
            type="password"
            label="Password"
            variant="outlined"
            required
            onChange={(e) => handlePassword(e)}
          ></TextField>
          <FormControlLabel
            required
            control={<Checkbox sx={CheckboxSxProps} />}
            label="Remember me"
          />
          <Button
            variant="contained"
            className={styles.loginBtn}
            onClick={validateUser}
          >
            <Typography variant="body1" className={styles.loginBtnTypography}>
              Login
            </Typography>
          </Button>
        </Paper>
        <RegisterTile />
        <ErrorText
          text="Invalid username / password"
          isValid={isValid}
          width="300px"
          height="50px"
        />
      </Box>
    </>
  );
};
