import { createBrowserRouter, RouterProvider } from "react-router";
import { authRoutes } from "./auth.route";
import { dashboardRoutes } from "./dashboard.route";

const router = createBrowserRouter([
  authRoutes,
  dashboardRoutes
]);

export default function Router() {
  return <RouterProvider router={router} />;
}