import { RouterProvider } from "react-router";
import { router } from "./routes/Routes.jsx";
import { AuthProvider } from "./auth/services/auth.provider.jsx";

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App