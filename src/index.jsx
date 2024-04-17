import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Players from "./pages/Players";
import Report from "./pages/Report";
import PlayerDetails from "./pages/PlayerDetails";
import Body from "./components/Body";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/players",
        element: <Players />,
      },
      {
        path: "/report",
        element: <Report />,
      },
      {
        path: "/players/:playerId",
        element: <PlayerDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
