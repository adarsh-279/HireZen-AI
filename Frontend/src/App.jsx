import { RouterProvider } from "react-router";
import { router } from "./routes/Routes.jsx";
import { AuthProvider } from "./auth/services/auth.provider.jsx";
import { InterviewProvider } from "./report/services/interview.provider.jsx";

const App = () => {
  return (
    <AuthProvider>
      <InterviewProvider>
        <RouterProvider router={router} />
      </InterviewProvider>
    </AuthProvider>
  );
}

export default App