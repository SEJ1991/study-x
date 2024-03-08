import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "styles/global.css";
import App from "App.tsx";
import IndexPage from "pages/IndexPage";
import RecoilPage from "pages/RecoilPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: "/recoil",
        element: <RecoilPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
