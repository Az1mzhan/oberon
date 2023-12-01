import { MediaCarousel } from "../../components/media-carousel/MediaCarousel";
import React, { FC, ReactElement, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Media } from "../../types/Media";

const UploadFileComponent: FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isUploaded, setIsUploaded] = useState<boolean>(false);

  const handleMedia = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFiles(Array.from(e.target.files));
    setIsUploaded(true);
  };

  const formMedias = (): Media[] => {
    const medias: Media[] = [];
    files.forEach((file: File, ind: number) =>
      medias.push({ id: ind, src: file.name })
    );
    return medias;
  };

  const createMediaComponents = (): ReactElement => {
    return <MediaCarousel medias={formMedias()} />;
  };

  useEffect(() => {
    const date: Date = new Date();
    console.log(date.toLocaleString());
  }, []);

  return (
    <Button variant="contained" component="label">
      <p>Upload</p>
      <input
        onChange={handleMedia}
        type="file"
        accept=".jpeg, .png, .bmp, .mp4, .mov"
        multiple={true}
        hidden
      />
      {isUploaded && createMediaComponents()}
    </Button>
  );
};

export default UploadFileComponent;
