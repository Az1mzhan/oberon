import { FC } from "react";
import { IconButton, useTheme } from "@mui/material";
import { SxProps } from "@mui/system";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import styles from "./recordButton.module.css";

interface Props {
  handleRecord: () => void;
}

export const RecordButton: FC<Props> = ({ handleRecord }: Props) => {
  const theme = useTheme();
  const buttonSxProps: SxProps = {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.secondary,
    transition: "background-color .25s linear",
    "&:hover": {
      backgroundColor: "red",
    },
  };

  return (
    <>
      <IconButton
        className={styles.recordButton}
        children={<RadioButtonCheckedIcon className={styles.recordIcon} />}
        onClick={handleRecord}
        sx={buttonSxProps}
      />
    </>
  );
};
