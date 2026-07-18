import { RouterProvider } from "react-router";
import { router } from "./routes/Routes.jsx";
import { AuthProvider } from "./auth/services/auth.provider.jsx";
import { InterviewProvider } from "./report/services/interview.provider.jsx";
import {useLenis} from "./ui/hooks/useLenis.js"

const App = () => {
  useLenis()
  return (
    <AuthProvider>
      <InterviewProvider>
        <RouterProvider router={router} />
      </InterviewProvider>
    </AuthProvider>
  );
}

export default App