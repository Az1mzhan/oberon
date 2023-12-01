import { router } from "./Routes";
import { UsersContext } from "./contexts/UsersContext";
import { AppTheme } from "./contexts/mui/AppTheme";
import { useFetchedUsers } from "./hooks/useFetchedUsers";
import React, { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";

const App: FC = () => {
  const theme = createTheme(AppTheme);
  const users = useFetchedUsers();

  return (
    <UsersContext.Provider value={users}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </UsersContext.Provider>
  );
};

export default App;
