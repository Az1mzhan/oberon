import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { UsersContext } from "../contexts/UsersContext";
import { User } from "../types/User";
import { useNavigate } from "react-router-dom";

export const Search: FC = () => {
  const theme = useTheme();
  const otherUsers = useContext(UsersContext);
  const navigate = useNavigate();

  const [text, setText] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);

  const redirectToRoot = (id: number): void => {
    navigate(`/profile/${id}`);
  };

  const sortUsers = (a: User, b: User): number => {
    return a.username < b.username ? -1 : a.username > b.username ? 1 : 0;
  };

  const renderUsers = (): void => {
    setUsers(
      otherUsers.filter((user) => user.username.includes(text)).sort(sortUsers)
    );
  };

  useEffect(renderUsers, [otherUsers, text]);

  return (
    <>
      <TextField
        className="search-field"
        variant="standard"
        label="Enter an account's name"
        sx={{
          width: "100%",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.secondary.main,
        }}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
      />
      <Box className="users-block">
        {text !== "" &&
          users.map((user) => (
            <Box
              key={user.id}
              sx={{
                width: "100%",
                height: "7.5vh",
                borderBottom: `.0625vw solid ${theme.palette.secondary.main}`,
              }}
              className="user-block"
            >
              <Button
                onClick={() => {
                  redirectToRoot(user.id);
                }}
                sx={{
                  width: "100%",
                  height: "100%",
                  padding: ".25vh 1.25vw",
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: "1.25vw",
                  textTransform: "lowercase",
                }}
              >
                <Avatar src={user.avatar} />
                <Box
                  sx={{
                    color: theme.palette.secondary.main,
                    textAlign: "start",
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    {user.username}
                  </Typography>
                  <Typography variant="body2">{user.description}</Typography>
                </Box>
              </Button>
            </Box>
          ))}
      </Box>
    </>
  );
};
