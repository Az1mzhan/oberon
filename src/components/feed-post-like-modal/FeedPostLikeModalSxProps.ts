import { SxProps } from "@mui/system";

const likesModalContainerSxProps: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  marginTop: "12.5%",
};

const likesModalCloseBtnContainerSxProps: SxProps = {
  width: "27.5vw",
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: "2.5vh",
};

const closeModalBtnSxProps: SxProps = {
  "&:hover": {
    backgroundColor: "red",
  },
};

const likesStatisticsSxProps: SxProps = {
  width: "27.5vw",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: "2.5vh 0",
  border: ".125vh solid grey",
  backgroundColor: "white",
};

const postStatisticsSxProps: SxProps = {
  fontWeight: "bolder",
};

const likesContainerSxProps: SxProps = {
  width: "27.5vw",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "white",
};

export default {
  likesModalContainerSxProps,
  likesModalCloseBtnContainerSxProps,
  closeModalBtnSxProps,
  likesStatisticsSxProps,
  postStatisticsSxProps,
  likesContainerSxProps,
};
