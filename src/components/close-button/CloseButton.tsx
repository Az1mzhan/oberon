import React, { FC } from "react";
import { IconButton, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { SxProps } from "@mui/system";
import styles from "./closeButton.module.css";

interface Props {
  handleClose:
    | (() => void)
    | ((e: React.ChangeEvent<HTMLButtonElement>) => void);
  className?: string;
}

export const CloseButton: FC<Props> = ({ handleClose, className }: Props) => {
  const theme = useTheme();

  const closeIconColorSxProps: SxProps = {
    color: theme.palette.text.secondary,
  };

  return (
    <>
      <IconButton
        className={`${styles.closeButton} ${className}`}
        onClick={handleClose}
        size="medium"
      >
        <CloseIcon sx={closeIconColorSxProps} />
      </IconButton>
    </>
  );
};
