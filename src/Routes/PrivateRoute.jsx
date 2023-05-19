import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  if (user) {
    return children;
  } 
  else {
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
  }
};

export default PrivateRoute;
