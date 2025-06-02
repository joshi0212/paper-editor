import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import ErrorPage from "./error-page";
import Home from "./routes/home";
import ImportRoute from "./routes/import";
import WriteRoute from "./routes/write";
import ProofreadRoute from "./routes/proofread";
import DeliverRoute from "./routes/deliver";

import Settings from "./routes/settings";
import { TauriProvider } from "./context/TauriProvider";
import "./styles.css";
import { SettingsProvider } from "./context/SettingsProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/import",
        element: <ImportRoute/>,
      },
      {
        path: "/write",
        element: <WriteRoute/>,
      },
      {
        path: "/proofread",
        element: <ProofreadRoute/>,
      },
      {
        path: "/deliver",
        element: <DeliverRoute/>,
      },
      {
        path: "/settings",
        element: <Settings/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TauriProvider>
      <SettingsProvider>
        <RouterProvider router={router} />
      </SettingsProvider>
    </TauriProvider>
  </React.StrictMode>
);
