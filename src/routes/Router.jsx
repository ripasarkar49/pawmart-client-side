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
import MyOrders from "../pages/MyOrders";
import Slider from "../components/Slider";
import CategoryCards from "../components/CategoryCards";
import PetAndSupplies from "../components/PetAndSupplies";
import WhyAdopt from "../components/WhyAdopt";
import OurHeroes from "../components/OurHeroes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayoutes></HomeLayoutes>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/slider",
        element: <Slider></Slider>,
      },
      {
        path: "/categoryCards",
        element: <CategoryCards></CategoryCards>,
      },
      {
        path: "/petAndSupplies",
        element: <PetAndSupplies></PetAndSupplies>,
      },
      {
        path: "/whyAdopt",
        element: <WhyAdopt></WhyAdopt>,
      },
      {
        path: "/ourHeroes",
        element: <OurHeroes></OurHeroes>,
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
      return fetch(`https://pawmart-server-side.vercel.app/services/${id}`);
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
    path: "/my-orders",
    element: (
      <PrivateRoutes>
        {" "}
        <MyOrders></MyOrders>
      </PrivateRoutes>
    ),
  },
  {
    path: "/my-listings",
    element: (
      <PrivateRoutes>
        <MylListings></MylListings>
      </PrivateRoutes>
    ),
  },
  {
    path: "/update-service/:id",
    element: (
      <PrivateRoutes>
        <UpdateService></UpdateService>
      </PrivateRoutes>
    ),
  },
  {
    path: "/*",
    element: <NotFound></NotFound>,
  },
]);
export default router;
