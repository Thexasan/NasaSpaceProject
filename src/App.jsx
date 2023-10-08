import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  AboutProject,
  AboutUs,
  Catalog,
  Chat,
  Home,
  Layout,
  News,
  Profile,
  Register,
} from "./router/Routes";
import "./App.css";
import AuthCheck from "./utils/AuthCheck";
import ProtectedRoute from "./utils/ProtectedRoute";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "catalog",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Catalog />
            </Suspense>
          ),
        },
        {
          path: "aboutProject/:id",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <AboutProject />
            </Suspense>
          ),
        },
        {
          path: "profile",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            </Suspense>
          ),
        },
        {
          path: "chat/:id",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            </Suspense>
          ),
        },
        {
          path: "register",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Register />
            </Suspense>
          ),
        },
        {
          path: "news",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <News />
            </Suspense>
          ),
        },
        {
          path: "aboutUs",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <AboutUs />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
