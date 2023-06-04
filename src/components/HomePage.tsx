import React, { FC } from "react";
import { StoryPanel } from "./StoryPanel";
import { Outlet } from "react-router-dom";

export const HomePage: FC = () => {
  return (
    <>
      <StoryPanel />
      <Outlet />
    </>
  );
};
