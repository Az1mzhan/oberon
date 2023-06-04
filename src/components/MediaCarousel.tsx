import { Media } from "../types/Media";
import { FC, useState } from "react";
import { MediaComponent } from "./MediaComponent";
import { Box, IconButton, MobileStepper } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

interface Props {
  medias: Media[];
}

export const MediaCarousel: FC<Props> = ({ medias }: Props) => {
  const [selectedMedia, setSelectedMedia] = useState<number>(0);

  const moveToPreviousMedia = (): void => {
    selectedMedia === 0
      ? setSelectedMedia(medias.length - 1)
      : setSelectedMedia(selectedMedia - 1);
  };

  const moveToNextMedia = (): void => {
    selectedMedia === medias.length - 1
      ? setSelectedMedia(0)
      : setSelectedMedia(selectedMedia + 1);
  };

  return (
    <Box className="media-carousel" sx={{ width: "100%", height: "100%" }}>
      <MediaComponent
        width="100%"
        height="100%"
        media={medias[selectedMedia]}
        isRendered={true}
      />
      <MobileStepper
        sx={{ backgroundColor: "transparent", width: "100%", height: "10%" }}
        variant="dots"
        activeStep={selectedMedia}
        backButton={
          <IconButton onClick={moveToPreviousMedia}>
            <KeyboardArrowLeft />
          </IconButton>
        }
        nextButton={
          <IconButton onClick={moveToNextMedia}>
            <KeyboardArrowRight />
          </IconButton>
        }
        steps={medias.length}
      />
    </Box>
  );
};
