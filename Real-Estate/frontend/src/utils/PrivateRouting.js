import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [auth, setAuth] = useState("");
  useEffect(() => {
    const isAuthenticated = Boolean(localStorage.getItem("token")); // Example auth logic
    setAuth(isAuthenticated);
  });
  return auth ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
