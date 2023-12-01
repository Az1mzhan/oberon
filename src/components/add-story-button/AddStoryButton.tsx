import AddStoryButtonSxProps from "./AddStoryButtonSxProps";
import { selectUserInfo } from "../../store/userSlice";
import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/User";
import { Button, Avatar } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import styles from "./addStoryButton.module.css";

export const AddStoryButton: FC = () => {
  const myUser: User = useSelector(selectUserInfo);
  const navigate = useNavigate();

  const redirectToCreateStoryMenu = () => {
    navigate("/create-story");
  };

  return (
    <>
      <Button onClick={redirectToCreateStoryMenu}>
        <Avatar
          src={myUser.avatar}
          sx={AddStoryButtonSxProps.myUserAvatarSxProps}
        />
        <AddCircleIcon className={styles.addCircleIcon} />
      </Button>
    </>
  );
};
