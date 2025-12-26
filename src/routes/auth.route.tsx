import LoginPage from "@/pages/auth/login";
import type { RouteObject } from "react-router";

export const authRoutes: RouteObject = {
  path: "auth",
  children: [
    {
      path: "login",
      element: <LoginPage />,
    }
  ]
}