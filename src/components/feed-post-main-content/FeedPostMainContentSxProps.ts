import { SxProps } from "@mui/system";

const feedPostMainContent: SxProps = {
  display: "flex",
  flexDirection: "column",
};

const feedPostStatistics: SxProps = {
  paddingTop: "7.5vh",
};

const feedPostButtonsSxProps: SxProps = {
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  color: "black",
  fontWeight: "bolder",
  textTransform: "none",
};

export default {
  feedPostMainContent,
  feedPostStatistics,
  feedPostButtonsSxProps,
};
