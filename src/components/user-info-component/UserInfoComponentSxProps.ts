import { SxProps } from "@mui/system";

const userInfoContainerSxProps: SxProps = {
  width: "100%",
  height: "10vh",
  border: ".125vh solid grey",
  borderTop: "none",
};

const userInfoBtnSxProps: SxProps = {
  width: "100%",
  height: "100%",
  padding: "0 2.5vw",
  justifyContent: "flex-start",
  gap: "2vw",
};

const usernameSxProps: SxProps = {
  fontWeight: "bolder",
  textTransform: "none",
};

const userDescriptionSxProps: SxProps = {
  display: "flex",
  justifyContent: "flex-start",
  textTransform: "none",
};

export default {
  userInfoContainerSxProps,
  userInfoBtnSxProps,
  usernameSxProps,
  userDescriptionSxProps,
};
