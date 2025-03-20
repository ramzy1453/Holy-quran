import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import Sourates from "./pages/Sourates/Sourates";
import Reciter from "./pages/Reciters/reciter";
import Audio from "./pages/Audio/Audio";
import { createBrowserRouter, RouterProvider } from "react-router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
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
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>
);
