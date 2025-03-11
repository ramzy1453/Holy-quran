import React, { startTransition } from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import Sourates from "./pages/Sourates/Sourates";
import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "./components/Navbar/Navbar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Sourate/:numberSourat",
    element: (
      <>
        <Navbar />
        <Sourates />
      </>
    ),
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
