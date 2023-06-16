import React, { FC, useEffect, useState } from "react";
import { MyUserContext } from "./contexts/MyUserContext";
import { UsersContext } from "./contexts/UsersContext";
import "./App.css";
import { User } from "./types/User";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { AppTheme } from "./contexts/AppTheme";
import { Root } from "./components/Root";
import { HomePage } from "./components/HomePage";
import { Profile } from "./components/Profile";
import { ErrorPage } from "./components/ErrorPage";
import { Search } from "./components/Search";
import { UploadFileComponent } from "./components/UploadFileComponent";
import { StoryModal } from "./components/StoryModal";
import { PostModal } from "./components/PostModal";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="home" element={<HomePage />}>
        <Route path=":userID" element={<StoryModal />} />
      </Route>
      <Route path="profile">
        <Route path=":userID" element={<Profile />}>
          <Route path=":postID" element={<PostModal />} />
        </Route>
      </Route>
      <Route path="search" element={<Search />} />
      <Route path="post" element={<UploadFileComponent />} />

      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const App: FC = () => {
  const theme = createTheme(AppTheme);
  const [myUser, setMyUser] = useState<User>({} as User);
  const [users, setUsers] = useState<User[]>([]);

  const fetchData = async (): Promise<void> => {
    try {
      const req = await fetch("http://localhost:4000/users");
      const json = await req.json();
      await setMyUser(json[0]);
      await setUsers(json);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MyUserContext.Provider value={myUser}>
      <UsersContext.Provider value={users}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </UsersContext.Provider>
    </MyUserContext.Provider>
  );
};

export default App;
