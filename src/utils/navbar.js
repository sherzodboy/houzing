import useId from "../hooks/useId";
import Properties from "./../pages/Properties/index";
import HomePage from "./../pages/Home/index";

export const navbar = [
  {
    id: useId,
    element: <HomePage />,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Properties />,
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <h1>Generic Sign In</h1>,
    title: "Sign In",
    path: "/signin",
    private: false,
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
