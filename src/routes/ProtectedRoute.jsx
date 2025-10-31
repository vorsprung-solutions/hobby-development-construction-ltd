import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/Auth/useAuth";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import DashBoardLayout1 from "../layouts/DashboardLayout/DashboardLayout1";
import DashboardCustomLayout from "../layouts/DashboardLayout/DashboardCustomLayout";

export const ProtectedRoute = () => {
  const { token } = useAuth();

  // Check if the user is authenticated
  if (!token) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If authenticated, render the child routes
  return <DashboardCustomLayout></DashboardCustomLayout>;
  // return <DashboardLayout></DashboardLayout>;
  // return <DashBoardLayout1 />;
};
