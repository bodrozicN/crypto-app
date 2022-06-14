import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";

const RequireAuth = ({ children }: { children: ReactNode }) => {
  const { user } = useAppSelector((state) => state.login);
  return user ? <>{children}</> : <Navigate to="/" />;
};

export default RequireAuth;
