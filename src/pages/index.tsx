import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Error from "./error/Error";

const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./home/Home"));
const Movies = lazy(() => import("./movies/Movies"));
const Detail = lazy(() => import("./detail/Detail"));
const PersonDeatil = lazy(() => import("./detail/PersonDeatil"));

const MainRouter = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movies",
          element: <Movies />,
        },
        {
          path: "/movie/:id",
          element: <Detail/>,
        },
        {
          path: "/person/:id",
          element: <PersonDeatil/>,
        },
        {
          path: "/*",
          element: <Error/>,
        }
      ],
    },
  ]);
};

export default MainRouter;
