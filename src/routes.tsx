import { createBrowserRouter } from "react-router";
import LoginPage from "./pages/Login";

const routes = createBrowserRouter([{
  path: "/login",
  element: <LoginPage />,
}]);