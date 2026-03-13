import { createBrowserRouter } from "react-router";
import Login from "../auth/pages/Login.jsx";
import Register from "../auth/pages/Register.jsx";
import Protected from "../auth/components/protected.jsx";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: (
      <Protected>
        <h1>HOME</h1>
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);