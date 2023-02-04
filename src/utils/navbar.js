import React from "react";
import useId from "../hooks/useId";
import Signin from "./../pages/Register";
import Favourite from "./../pages/Favourite";
import MyProfile from "./../pages/MyProfile";
import AddNewHouse from "./../pages/AddNewHouse";

const Properties = React.lazy(() => import("./../pages/Properties/index"));
const HomePage = React.lazy(() => import("./../pages/Home/index"));
const HomeItem = React.lazy(() => import("./../pages/HouseItem/index"));

export const navbar = [
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HomePage />
      </React.Suspense>
    ),
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Properties />
      </React.Suspense>
    ),
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HomeItem />
      </React.Suspense>
    ),
    title: "Single House",
    path: "/properties/:id",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <Signin />,
    title: "Sign In",
    path: "/signin",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <Favourite />,
    title: "Favourite",
    path: "/favourite",
    private: true,
    hidden: true,
  },
  {
    id: useId,
    element: <MyProfile />,
    title: "My Profile",
    path: "/myprofile",
    private: true,
    hidden: true,
  },
  {
    id: useId,
    element: <AddNewHouse />,
    title: "Add New House",
    path: "/myprofile/newhouse",
    private: true,
    hidden: true,
  },
  {
    id: useId,
    element: <AddNewHouse />,
    title: "Add New House",
    path: "/myprofile/edithouse/:id",
    private: true,
    hidden: true,
  },
  {
    id: useId,
    element: <h1>Generic Sign Up</h1>,
    title: "Sign Up",
    path: "/signup",
    private: false,
    hidden: true,
  },
];

export default navbar;
