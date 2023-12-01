import { useWebcam } from "../../hooks/useWebcam";
import { CloseButton } from "../close-button/CloseButton";
import { WebCam } from "../web-cam/WebCam";
import { RecordButton } from "../record-button/RecordButton";
import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import styles from "./recordStoryComponent.module.css";

export const RecordStoryComponent: FC = () => {
  const [videoRef, cameraSettingsRef, setIsVideo, setIsAudio] = useWebcam();
  const navigate = useNavigate();

  const [recordStoryComponentSxProps, setRecordStoryComponentSxProps] =
    useState<SxProps>(null as SxProps);

  const redirectToHome = (): void => {
    setIsVideo(false);
    setIsAudio(false);
    navigate(-1);
  };

  const handleRecord = (): void => {
    setIsAudio((prevState: boolean) => !prevState);
  };

  useEffect(() => {
    if (cameraSettingsRef.current !== (null as MediaTrackSettings)) {
      setRecordStoryComponentSxProps({
        width: `${cameraSettingsRef.current.width}px`,
      });
    }
  }, [cameraSettingsRef]);

  return (
    <>
      <Box
        className={styles.recordStoryComponent}
        sx={recordStoryComponentSxProps}
      >
        <Box className={styles.closeButtonContainer}>
          <CloseButton handleClose={redirectToHome} />
        </Box>
        <WebCam videoRef={videoRef} />
        <Box className={styles.recordButtonContainer}>
          <RecordButton handleRecord={handleRecord} />
        </Box>
      </Box>
    </>
  );
};
