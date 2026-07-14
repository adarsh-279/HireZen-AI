import { createBrowserRouter } from "react-router";
import Login from "../auth/pages/Login.jsx";
import Register from "../auth/pages/Register.jsx";
import Protected from "../auth/components/protected.jsx";
import Dashboard from "../dashboard/pages/Dashboard.jsx";
import ResumeUpload from "../resume/pages/ResumeUpload.jsx";
import InterviewReport from "../report/pages/InterviewReport.jsx";
import ReportDetails from "../report/components/ReportDetails.jsx";
import Home from "../home/pages/Home.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: (
      <Protected>
        <Dashboard />
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
  {
    path: "/resume",
    element: (
      <Protected>
        <ResumeUpload />
      </Protected>
    ),
  },
  {
    path: "/reports",
    element: (
      <Protected>
        <InterviewReport />
      </Protected>
    ),
  },
  {
    path: "/reports/:id",
    element: (
      <Protected>
        <ReportDetails />
      </Protected>
    ),
  },
]);