import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AddAToy from "../Pages/AddAToy/AddAToy";
import AllToys from "../Pages/AllToys/AllToys";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyToys from "../Pages/MyToys/MyToys";
import Register from "../Pages/Register/Register";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import UpdateToyData from "../Pages/UpdateToyData/UpdateToyData";
import PrivateRoute from "./PrivateRoute";

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
        element: <PrivateRoute><ToyDetails /></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`),
      },
      {
        path: "/add-a-toy",
        element: <PrivateRoute><AddAToy/></PrivateRoute>
      },
      {
        path: "/my-toys",
        element:<MyToys/>
      },
      {
        path: "/update-toy/:id",
        element:<UpdateToyData/>,
        loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
      },
      {
        path: "/blog",
        element:<Blog/>
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
