import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AllToys from "../Pages/AllToys/AllToys";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/toys",
        element: <AllToys />,
        loader: () => fetch("http://localhost:5000/toys"),
      },
      {
        path: "/toys/:id",
        element: <ToyDetails />,
        loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`),
      },
    ],
  },
]);

export default router;
