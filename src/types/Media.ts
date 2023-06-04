export enum MediaType {
  VIDEO = "video",
  PHOTO = "photo",
  UNKNOWN = "unknown",
}

export type Media = {
  id: number;
  src: string;
};
