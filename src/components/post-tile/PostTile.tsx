import { FC } from "react";
import { Box, Button, useTheme } from "@mui/material";
import { MediaComponent } from "../MediaComponent";
import { Post } from "../../types/Post";
import { Link } from "react-router-dom";
import styles from "./postTile.module.css";
import { SxProps } from "@mui/system";

interface Props {
  post: Post;
}

export const PostTile: FC<Props> = ({ post }: Props) => {
  const theme = useTheme();

  const postTileSxProps: SxProps = {
    borderColor: theme.palette.background.default,
    "&:hover": {
      borderColor: theme.palette.primary.main,
    },
  };

  return (
    <>
      <Box className={styles.postTile} sx={postTileSxProps}>
        <Button
          className={styles.postTileButton}
          component={Link}
          to={`posts/${post.id}`}
        >
          <MediaComponent
            width="100%"
            height="100%"
            media={post.media[0]}
            isRendered={true}
          />
        </Button>
      </Box>
    </>
  );
};
