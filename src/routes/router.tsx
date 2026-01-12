import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { authRoutes } from "./auth.route";

const router = createBrowserRouter([
  authRoutes
]);

export default function Router() {
  return <RouterProvider router={router} />;
}