export const postModalReducer = (state: postModalState, action) => {
  switch (action.type) {
    case "postModal/openLikesModal":
      return {
        ...state,
        modalName: "likesModal",
        isOpened: true,
      };
    case "postModal/closeLikesModal":
      return {
        ...state,
        modalName: "likesModal",
        isOpened: false,
      };
    case "postModal/openCommentsModal":
      return {
        ...state,
        modalName: "commentsModal",
        isOpened: true,
      };
    case "postModal/closeCommentsModal":
      return {
        ...state,
        modalName: "commentsModal",
        isOpened: false,
      };
    default:
      throw Error("Unknown action");
  }
};

export type postModalState = {
  modalName: string;
  isOpened: boolean;
};
