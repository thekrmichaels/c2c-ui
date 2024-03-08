import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import CommitFinder from "./components/CommitFinder";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const base = "c2c-ui";
const router = createBrowserRouter([
  {
    path: base,
    element: <CommitFinder />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_DOMAIN}
      clientId={import.meta.env.VITE_CLIENT_ID}
      authorizationParams={{
        redirect_uri: `${window.location.origin}/${base}/`,
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
