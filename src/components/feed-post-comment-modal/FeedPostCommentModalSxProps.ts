import { SxProps } from "@mui/system";

const commentsModalContainerSxProps: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "12.5%",
};

const commentsModalCloseBtnContainerSxProps: SxProps = {
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

const commentsStatisticsSxProps: SxProps = {
  width: "27.5vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2.5vh 0",
  borderBottom: ".125vh solid grey",
  backgroundColor: "white",
};

const postStatisticsSxProps: SxProps = {
  fontWeight: "bolder",
};

const commentsContainerSxProps: SxProps = {
  width: "27.5vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "white",
};

export default {
  commentsModalContainerSxProps,
  commentsModalCloseBtnContainerSxProps,
  closeModalBtnSxProps,
  commentsStatisticsSxProps,
  postStatisticsSxProps,
  commentsContainerSxProps,
};
