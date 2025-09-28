
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Inscription from "../pages/inscription/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/inscription",
    element: <Inscription />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
