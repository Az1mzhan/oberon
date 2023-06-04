import React, { FC } from "react";
import { NavigationBar } from "./NavigationBar";
import { Outlet } from "react-router-dom";

export const Root: FC = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};
