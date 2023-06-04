import { FC } from "react";
import { Box, Button } from "@mui/material";
import { MediaComponent } from "./MediaComponent";
import { Post } from "../types/Post";
import { Link } from "react-router-dom";

interface Props {
  post: Post;
}

export const PostTile: FC<Props> = ({ post }: Props) => {
  return (
    <Box
      className="post-tile"
      sx={{ display: "flex", width: "15vw", height: "15vw" }}
    >
      <Button
        sx={{ window: "100%", height: "100%" }}
        component={Link}
        to={`${post.id}`}
      >
        <MediaComponent
          width="100%"
          height="100%"
          media={post.media[0]}
          isRendered={true}
        />
      </Button>
    </Box>
  );
};
