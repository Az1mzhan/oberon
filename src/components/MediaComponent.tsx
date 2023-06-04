import { Media, MediaType } from "../types/Media";
import { FC, useEffect, useState } from "react";

interface Props {
  width: string;
  height: string;
  media: Media;
  isRendered: boolean;
}

export const MediaComponent: FC<Props> = ({
  width,
  height,
  media,
  isRendered,
}: Props) => {
  const [mediaType, setMediaType] = useState<MediaType>(MediaType.UNKNOWN);

  const defineMediaType = (): MediaType => {
    const imageRegex = /\.(jpg|png|bmp)/i;
    const videoRegex = /\.(mp4|mov)/i;
    if (imageRegex.test(media.src)) return MediaType.PHOTO;
    else if (videoRegex.test(media.src)) return MediaType.VIDEO;
    return MediaType.UNKNOWN;
  };

  useEffect(() => {
    setMediaType(defineMediaType());
  }, []);

  return (
    <>
      {isRendered && mediaType !== MediaType.UNKNOWN ? (
        mediaType === MediaType.PHOTO ? (
          <img
            className="media-component"
            key={media.id}
            src={media.src}
            alt={media.src}
            style={{ width: width, height: height }}
          />
        ) : (
          <video
            className="media-component"
            controls={true}
            key={media.id}
            src={media.src}
            style={{ width: width, height: height }}
          />
        )
      ) : null}
    </>
  );
};
