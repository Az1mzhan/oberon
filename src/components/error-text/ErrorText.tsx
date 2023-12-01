import { Alert, Zoom } from "@mui/material";
import styles from "./errorText.module.css";
import { SxProps } from "@mui/system";
import { FC } from "react";

interface Props {
  text: string;
  isValid: boolean;
  width: string;
  height: string;
}

export const ErrorText: FC<Props> = ({
  text,
  isValid,
  width,
  height,
}: Props) => {
  const alertSxProps: SxProps = {
    width: width,
    height: height,
    fontWeight: "bolder",
  };

  return (
    <>
      <Zoom in={isValid}>
        <Alert
          className={styles.invalidAlert}
          severity="error"
          sx={alertSxProps}
        >
          {text}
        </Alert>
      </Zoom>
    </>
  );
};
