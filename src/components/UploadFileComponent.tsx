import React, { FC, ReactElement, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { MediaCarousel } from "./MediaCarousel";
import { Media } from "../types/Media";

export const UploadFileComponent: FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isUploaded, setIsUploaded] = useState<boolean>(false);

  const handleMedia = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files !== null) setFiles(Array.from(e.target.files));
    setIsUploaded(true);
  };

  const formMedias = (): Media[] => {
    let medias: Media[] = [];
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
