import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  AboutProject,
  AboutUs,
  Catalog,
  Chat,
  EditProfile,
  Home,
  Layout,
  News,
  Profile,
  Register,
} from "./router/Routes";
import "./App.css";
import AuthCheck from "./utils/AuthCheck";
import ProtectedRoute from "./utils/ProtectedRoute";
import Loader from "./components/Loader/Loader";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<Loader/>}>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loader/>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "catalog",
          element: (
            <Suspense fallback={<Loader/>}>
              <Catalog />
            </Suspense>
          ),
        },
        {
          path: "aboutProject/:id",
          element: (
            <Suspense fallback={<Loader/>}>
              <AboutProject />
            </Suspense>
          ),
        },
        {
          path: "profile",
          element: (
            <Suspense fallback={<Loader/>}>
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            </Suspense>
          ),
        },
        {
          path: "chat/:id",
          element: (
            <Suspense fallback={<Loader/>}>
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            </Suspense>
          ),
        },
        {
          path: "register",
          element: (
            <Suspense fallback={<Loader/>}>
              <Register />
            </Suspense>
          ),
        },
        {
          path: "news",
          element: (
            <Suspense fallback={<Loader/>}>
              <News />
            </Suspense>
          ),
        },
        {
          path: "aboutUs",
          element: (
            <Suspense fallback={<Loader/>}>
              <AboutUs />
            </Suspense>
          ),
        },
        {
          path: "editProfile/:id",
          element: (
            <Suspense fallback={<Loader/>}>
              <EditProfile />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
