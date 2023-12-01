import { ReactElement, ReducerState, useReducer, useState } from "react";
import { Box } from "@mui/material";
import { carouselReducer } from "../../features/carousel/carouselReducer";
import { SelectedElem } from "../../types/SelectedElem";

interface Props<T> {
  data: T[];
  isCircular: boolean;
}

/*
Classic multiple elements' carousel.
NOTE: DON'T USE THE COMPONENT WITH REFERENCE TYPES, BUT PRIMITIVES.
If you want you use a carousel of media components, go to the React Component <MediaCarousel/>
*/

export const Carousel = <T,>({
  data,
  isCircular = true,
}: Props<T>): ReactElement => {
  const [selectedElem, setSelectedElem] = useReducer(carouselReducer, {
    selectedElem: 0,
  } as ReducerState<SelectedElem>);

  return (
    <>
      <Box>
        <ul>
          {data.map((elem: T) => (
            <li>{elem}</li>
          ))}
        </ul>
      </Box>
    </>
  );
};
