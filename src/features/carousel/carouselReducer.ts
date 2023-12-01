export const carouselReducer = (state, action) => {
  switch (action.type) {
    case "carousel/moveToNext":
      if (action.isCircular) {
        return state.selectedElem === action.dataAmount - 1
          ? { ...state, selectedElem: 0 }
          : { ...state, selectedElem: state.selectedElem + 1 };
      } else if (
        !action.isCircular &&
        state.selectedElem !== action.dataAmount - 1
      )
        return { ...state, selectedElem: state.selectedElem + 1 };
      break;
    case "carousel/moveToPrev":
      if (action.isCircular) {
        return state.selectedElem === 0
          ? { ...state, selectedElem: action.dataAmount - 1 }
          : { ...state, selectedElem: state.selectedElem - 1 };
      } else if (!action.isCircular && state.selectedElem !== 0)
        return { ...state, selectedElem: state.selectedElem + 1 };
      break;
    default:
      throw Error("Unknown action");
  }
};
