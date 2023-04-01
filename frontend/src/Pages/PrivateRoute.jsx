import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const login = useSelector((state) => state.Auth.isAuth);

  if (!login) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
