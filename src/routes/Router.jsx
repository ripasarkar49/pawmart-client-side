import { createBrowserRouter } from "react-router";
import HomeLayoutes from "../layoutes/HomeLayoutes";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayouts from "../layoutes/AuthLayouts";
import PrivateRoutes from "../Provider/PrivateRoutes";
import Loading from "../pages/Loading";
import ForgetPassword from "../pages/ForgetPassword";
import NotFound from "../pages/NotFound";
import AddListing from "../pages/AddListing";
import PetSuppliesDataAll from "../components/PetSuppliesDataAll";
import SeeDetails from "../pages/SeeDetails";
import FilteredCategoryPage from "../pages/FilteredCategoryPage";
import MylListings from "../pages/MylListings";
import UpdateService from "../pages/UpdateService";

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
    path: "/pets",
    element: <PetSuppliesDataAll></PetSuppliesDataAll>,
  },
  {
    path: "/see-details/:_id",
    element: (
      <PrivateRoutes>
        <SeeDetails></SeeDetails>
      </PrivateRoutes>
    ),
    loader: ({ params }) => {
      const id = params._id;
      return fetch(`http://localhost:3000/services/${id}`);
    },
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword></ForgetPassword>,
  },
  {
    path: "/category-filtered-product/:categoryName",
    element: <FilteredCategoryPage></FilteredCategoryPage>,
  },
  {
    path: "/add-listing",
    element: (
      <PrivateRoutes>
        {" "}
        <AddListing></AddListing>
      </PrivateRoutes>
    ),
  },
  {
    path: "/my-listings",
    element: <MylListings></MylListings>,
  },
  {
    path: "/update-service/:id",
    element: <UpdateService></UpdateService>,
  },
  {
    path: "/*",
    element: <NotFound></NotFound>,
  },
]);
export default router;
