import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GeneralContextProvider } from "./context/GeneralContext.jsx";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import Discover from "./pages/Discover/Discover.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/discover",
        element: <Discover />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeneralContextProvider>
      <RouterProvider router={router} />
    </GeneralContextProvider>
  </StrictMode>
);
