import { FC, MutableRefObject } from "react";

interface Props {
  videoRef: MutableRefObject<HTMLVideoElement>;
  width?: string | number;
  height?: string | number;
}

export const WebCam: FC<Props> = ({ videoRef, width, height }: Props) => {
  return (
    <>
      <video width={width} height={height} ref={videoRef} />
    </>
  );
};
