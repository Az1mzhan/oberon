import { useRef, useState, useEffect } from "react";

export const useWebcam = () => {
  const videoRef = useRef<HTMLVideoElement>(null as HTMLVideoElement);
  const streamRef = useRef<MediaStream>(null as MediaStream);
  const cameraSettingsRef = useRef<MediaTrackSettings>(
    null as MediaTrackSettings
  );

  const [isVideo, setIsVideo] = useState<boolean>(true);
  const [isAudio, setIsAudio] = useState<boolean>(false);

  const startVideoStream = async (): Promise<MediaStream> => {
    try {
      const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      streamRef.current = stream;

      const video: HTMLVideoElement = await videoRef.current;
      video.srcObject = await streamRef.current;
      await video.play();
      detectWebCamSettings();
    } catch (err) {
      console.error(err);
    }
  };

  const endVideoStream = (): void => {
    try {
      streamRef.current.getTracks().forEach((track: MediaStreamTrack) => {
        if (track.readyState === "live") track.stop();
      });
      endAudioStream();
    } catch (err) {
      console.error(err);
    }
  };

  const startAudioStream = async (): Promise<MediaStream> => {
    try {
      const streamWithAudio: MediaStream =
        await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

      const audioTracks: MediaStreamTrack[] = streamWithAudio.getAudioTracks();

      streamRef.current.addTrack(audioTracks[0]);
    } catch (err) {
      console.error(err);
    }
  };

  const endAudioStream = (): void => {
    try {
      const audioTracks: MediaStreamTrack[] =
        streamRef.current.getAudioTracks();
      if (audioTracks !== (null as MediaStreamTrack[])) {
        streamRef.current.removeTrack(audioTracks[0]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const detectWebCamSettings = (): void => {
    try {
      if (streamRef.current !== (null as MediaStream)) {
        const cameraSettings: MediaTrackSettings = streamRef.current
          .getTracks()[0]
          .getSettings();
        cameraSettingsRef.current = cameraSettings;
        console.log("cameraSettingsRef:   ", cameraSettingsRef.current);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    isVideo ? startVideoStream() : endVideoStream();
  }, [isVideo]);

  useEffect(() => {
    isAudio ? startAudioStream() : endAudioStream();
  }, [isAudio]);

  return [videoRef, cameraSettingsRef, setIsVideo, setIsAudio];
};
