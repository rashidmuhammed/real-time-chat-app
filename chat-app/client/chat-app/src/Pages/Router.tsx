import { createBrowserRouter } from "react-router-dom";
import Authlayout from "./Authlayout";
import Login from "./Login";
import Signup from "./Signup";

export const router = createBrowserRouter([
  {
    element: <Authlayout />,
    children: [
      { path: "/", element: <Login /> },
      { path: "signup", element: <Signup /> },
    ],
  },
]);
