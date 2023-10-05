import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  AboutProject,
  Catalog,
  Chat,
  Home,
  Layout,
  Profile,
  Register,
} from "./router/Routes";
import './App.css'

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
          path: "aboutProject",
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
              <Profile />
            </Suspense>
          ),
        },
        {
          path: "chat",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Chat />
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
