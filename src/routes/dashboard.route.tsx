import DashboardPage from "@/pages/dashboard";
import type { RouteObject } from "react-router";

export const dashboardRoutes: RouteObject = {
  path: "",
  children: [
    {
      path: "/dashboard",
      element: <DashboardPage />,
    }
  ]
}