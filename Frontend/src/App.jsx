import { RouterProvider } from "react-router";
import { router } from "./routes/Routes.jsx";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App