import { Suspense ,lazy } from "react";
import { ErrorPage } from "./pages/ErrorPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { CircularProgress } from "@mui/material";

const LoginPage = lazy(() => import("./pages/login-page/LoginPage").catch(err => {
    console.error(err);
    return {default: CircularProgress}
}));
const CreateStoryMenu = lazy(() => import("./pages/create-story-menu/CreateStoryMenu").catch(err => {
    console.error(err);
    return {default: CircularProgress}
}));
const HomePage = lazy(() => import("./pages/home-page/HomePage").catch(err => {
    console.error(err);
    return {default: CircularProgress}
}))
const ProfilePage = lazy(() => import("./pages/profile-page/ProfilePage").catch(err => {
    console.error(err);
    return {default: CircularProgress}
}))
const PostModal = lazy(() => import("./pages/post-modal/PostModal").catch(err => {
    console.error(err);
    return {default: CircularProgress}
}))
const StoryModal = lazy(() => import("./pages/story-modal/StoryModal").catch(err => {
    console.error(err);
    return {default: CircularProgress}
}))
const SearchPage = lazy(() => import("./pages/search-page/SearchPage").catch(err => {
    console.error(err);
    return {default: CircularProgress}
}))
const UploadFileComponent = lazy(() => import("./pages/upload-file-component/UploadFileComponent").catch(err => {
    console.error(err);
    return {default: CircularProgress}
}))

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        index
        element={
          <Suspense fallback={<CircularProgress />}>
            <LoginPage />
          </Suspense>
        }
      />
      <Route
        path="create-story"
        element={
          <Suspense fallback={<CircularProgress />}>
            <CreateStoryMenu />
          </Suspense>
        }
      />
      <Route
        path="home"
        element={
          <Suspense fallback={<CircularProgress />}>
            <HomePage />
          </Suspense>
        }
      />
      <Route path="profile">
        <Route
          path=":username"
          element={
            <Suspense fallback={<CircularProgress />}>
              <ProfilePage />
            </Suspense>
          }
        >
          <Route path="posts">
            <Route
              path=":postID"
              element={
                <Suspense fallback={<CircularProgress />}>
                  <PostModal />
                </Suspense>
              }
            />
          </Route>
          <Route path="stories">
            <Route
              path=":storyID"
              element={
                <Suspense fallback={<CircularProgress />}>
                  <StoryModal />
                </Suspense>
              }
            />
          </Route>
        </Route>
      </Route>
      <Route
        path="search"
        element={
          <Suspense fallback={<CircularProgress />}>
            <SearchPage />
          </Suspense>
        }
      />
      <Route
        path="create_post"
        element={
          <Suspense fallback={<CircularProgress />}>
            <UploadFileComponent />
          </Suspense>
        }
      />

      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
