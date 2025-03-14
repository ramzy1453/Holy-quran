import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import Sourates from "./pages/Sourates/Sourates";
import Reciters from "./pages/Reciters/reciter";
import { createBrowserRouter, RouterProvider } from "react-router";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Sourate/:numberSourat",
    element: <Sourates />,
  },
  {
    path: "/reciter",
    element: <Reciters />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
