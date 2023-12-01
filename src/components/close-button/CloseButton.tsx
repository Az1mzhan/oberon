import { FC } from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  handleClose: () => void;
}

export const CloseButton: FC<Props> = ({ handleClose }: Props) => {
  return (
    <>
      <IconButton onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </>
  );
};
