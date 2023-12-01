import { MediaComponent } from "../MediaComponent";
import { carouselReducer } from "../../features/carousel/carouselReducer";
import { FC, ReducerState, useReducer } from "react";
import { Media } from "../../types/Media";
import { SelectedElem } from "../../types/SelectedElem";
import { Box, IconButton, MobileStepper, useTheme } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { SxProps } from "@mui/system";
import styles from "./mediaCarousel.module.css";

interface Props {
  medias: Media[];
  width: string;
  height: string;
  isCircular: boolean;
}

export const MediaCarousel: FC<Props> = ({
  medias,
  width,
  height,
  isCircular = true,
}: Props) => {
  const theme = useTheme();

  const mediaStepperSxProps: SxProps = {
    position: "relative",
    backgroundColor: "transparent",
  };

  const iconButtonSxProps: SxProps = {
    color: theme.palette.primary.main,
  };

  const [media, dispatchMedia] = useReducer(carouselReducer, {
    selectedElem: 0,
  } as ReducerState<SelectedElem>);

  const moveToPreviousMedia = (): void => {
    dispatchMedia({
      type: "carousel/moveToPrev",
      dataAmount: medias.length,
      isCircular: isCircular,
    });
  };

  const moveToNextMedia = (): void => {
    dispatchMedia({
      type: "carousel/moveToNext",
      dataAmount: medias.length,
      isCircular: isCircular,
    });
  };

  return (
    <Box className="mediaCarousel" sx={{ width: width, height: height }}>
      <MediaComponent
        className="mediaComponent"
        width="100%"
        height="100%"
        media={medias[media.selectedElem]}
        isRendered={true}
      />
      <MobileStepper
        className={styles.mediaStepper}
        sx={mediaStepperSxProps}
        variant="dots"
        activeStep={media.selectedElem}
        backButton={
          <IconButton onClick={moveToPreviousMedia} sx={iconButtonSxProps}>
            <KeyboardArrowLeft />
          </IconButton>
        }
        nextButton={
          <IconButton onClick={moveToNextMedia} sx={iconButtonSxProps}>
            <KeyboardArrowRight />
          </IconButton>
        }
        steps={medias.length}
      />
    </Box>
  );
};
