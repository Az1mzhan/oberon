import { FC, useContext, useState } from "react";
import { Avatar, Box, Modal, Typography, useTheme } from "@mui/material";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { User } from "../types/User";
import { MediaComponent } from "./MediaComponent";
import { OtherUsersContext } from "../contexts/OtherUsersContext";

export const StoryModal: FC = () => {
  const otherUsers = useContext(OtherUsersContext);
  const { userID } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();

  const [storyID, setStoryID] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(true);
  const user: User =
    typeof userID === "string"
      ? otherUsers.find((user) => user.id === parseInt(userID))
      : ({} as User);

  const handleClose = (): void => {
    if (user.stories.length === 0) navigate(-1);
    if (storyID !== user.stories.length - 1) setStoryID(storyID + 1);
    else {
      setStoryID(0);
      setOpen(false);
      navigate(-1);
    }
  };
  return (
    <>

      <Modal
          open={open}
          onClose={handleClose}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
      >
        <Box
            className="story-modal"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "20vw",
              height: "30vw",
              backgroundColor: theme.palette.background.default,
              border: `.125vw solid ${theme.palette.primary.main}`,
              borderRadius: ".5vw",
            }}
        >
          <Box
              className="story-modal-userinfo"
              sx={{
                width: "100%",
                height: "15%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
          >
            <Avatar
                sx={{
                  margin: "2.5vh .75vw",
                  border: `.125vw solid ${theme.palette.primary.main}`,
                }}
                src={user.avatar}
            />
            <Typography
                variant="body1"
                sx={{ color: theme.palette.primary.main, fontWeight: "bold" }}
            >
              {user.username}
            </Typography>
          </Box>
          <MediaComponent
              width="100%"
              height="100%"
              media={user.stories[storyID].media}
              isRendered={true}
          />
        </Box>
      </Modal>
      <Outlet />
    </>
  );
};
