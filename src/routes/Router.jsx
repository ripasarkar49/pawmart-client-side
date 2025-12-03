import { createBrowserRouter } from "react-router";
import HomeLayoutes from "../layoutes/HomeLayoutes";
import Home from "../pages/Home";
import Toys from "../layoutes/Toys";
import ToysData from "../components/ToysData";
import ToyDetails from "../pages/ToyDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayouts from "../layoutes/AuthLayouts";
import PrivateRoutes from "../Provider/PrivateRoutes";
import Loading from "../pages/Loading";
import ForgetPassword from "../pages/ForgetPassword";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayoutes></HomeLayoutes>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayouts></AuthLayouts>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/toys",
    element: (
      <PrivateRoutes>
        <Toys></Toys>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/toys",
        element: <ToysData></ToysData>,
      },
    ],
  },
  {
    path: "/toy-details/:toyId",
    element: (
      <PrivateRoutes>
        <ToyDetails></ToyDetails>
      </PrivateRoutes>
    ),
    loader: () => fetch("/toys.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword></ForgetPassword>,
  },
  {
    path: "/*",
    element: <NotFound></NotFound>,
  },
]);
export default router;
