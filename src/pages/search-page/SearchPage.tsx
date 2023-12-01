import { UsersContext } from "../../contexts/UsersContext";
import {
  SearchedUsers,
  searchedUsersInitialState,
} from "../../types/SearchedUsers";
import { userListReducer } from "../../features/searchPage/userListReducer";
import { sortUsers } from "../../features/searchPage/sortUsers";
import { NavigationBar } from "../../layout/navigation-bar/NavigationBar";
import {
  ChangeEvent,
  FC,
  ReducerState,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/User";
import {
  Avatar,
  Box,
  Button,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { SxProps } from "@mui/system";
import styles from "./searchPage.module.css";

const SearchPage: FC = () => {
  const theme = useTheme();

  const searchListMemberUsernameSxProps: SxProps = {
    color: theme.palette.text.primary,
  };

  const users = useContext(UsersContext);
  const navigate = useNavigate();

  const [text, setText] = useState<string>("");
  const [searchList, dispatchSearchList] = useReducer(
    userListReducer,
    searchedUsersInitialState as ReducerState<SearchedUsers>
  );

  const renderUsers = (): void => {
    if (text !== "") {
      dispatchSearchList({
        type: "userList/filter",
        filteredArray: users
          .filter((user) => user.username.includes(text))
          .sort(sortUsers),
      });
    }
  };

  const handleText = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  useEffect(renderUsers, [users, text]);

  return (
    <>
      <Box className={styles.searchPage}>
        <Box className={styles.searchFieldContainer}>
          <TextField
            className={styles.searchField}
            variant="standard"
            label="Enter an account's name"
            onChange={handleText}
            sx={{ color: "white !important" }}
          />
        </Box>
        <Box className={styles.searchList}>
          {text !== "" &&
            searchList.users.map((user: User, index: number) => (
              <Box key={index} className={styles.searchListMember}>
                <Button
                  className={styles.searchListMemberButton}
                  onClick={() => {
                    navigate(`/profile/${user.username}`);
                  }}
                  disableRipple
                >
                  <Avatar src={user.avatar} />
                  <Box className={styles.searchListMemberUsernameContainer}>
                    <Typography
                      variant="body2"
                      className={styles.searchListMemberUsername}
                      sx={searchListMemberUsernameSxProps}
                    >
                      {user.username}
                    </Typography>
                  </Box>
                </Button>
              </Box>
            ))}
        </Box>
        <NavigationBar />
      </Box>
    </>
  );
};

export default SearchPage;
