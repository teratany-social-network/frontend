import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/store";

interface ProtectedRouteProps {
  children: React.JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = useSelector<RootState>(
    (state) => state.teratany_user.isAuthenticated
  ) as boolean;

  if (!isAuthenticated) {
    return <Navigate to={"/signin"} replace />;
  }

  return children;
};
export default ProtectedRoute;
