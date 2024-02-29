import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const EntryPage = lazy(() => import("../pages/Entry"));
const Home = lazy(() => import("../components/pages/home"));
const Coin = lazy(() => import("../components/pages/coin"));
const Portfolio = lazy(() => import("../components/pages/portfolio"));
const ErrorPage = lazy(() => import("../components/pages/error"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <EntryPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/coin/:uuid",
        element: <Coin />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);
