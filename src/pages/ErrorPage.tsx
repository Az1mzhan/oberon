import { FC, useEffect } from "react";
import { useRouteError } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";

export const ErrorPage: FC = () => {
  const error = useRouteError();
  const myUser = useSelector(selectUser);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText}</i>
        <i>{myUser}</i>
      </p>
    </div>
  );
};
