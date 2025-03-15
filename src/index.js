import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import Sourates from "./pages/Sourates/Sourates";
import Reciter from "./pages/Reciters/Reciter";
import Audio from "./pages/Audio/Audio";
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
    path: "/Reciters",
    element: <Reciter />,
  },
  {
    path: "/Reciters/:identifier",
    element: <Audio />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
