import { RecordStoryComponent } from "../../components/record-story-component/RecordStoryComponent";
import React, { FC, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const CreateStoryMenu: FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFiles((prevState: File[]) => [...prevState, ...e.target.files]);
  };

  return (
    <>
      <Box className="createStoryMenu">
        <RecordStoryComponent />
        <Button variant="contained" component="label">
          <Typography variant="body2">Import from the device</Typography>
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.bmp"
            onChange={handleFile}
            multiple
            hidden
          />
        </Button>
        {files.map((file: File) => (
          <img src={URL.createObjectURL(file)} alt={file.name} />
        ))}
      </Box>
    </>
  );
};

export default CreateStoryMenu;
