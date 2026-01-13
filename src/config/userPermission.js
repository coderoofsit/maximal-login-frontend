import React from "react";
import { useAppContext } from "../context/appContext";
import { Navigate } from "react-router-dom";

const UserPermission = ({ element, role }) => {
  const { UserType, isLoading } = useAppContext();
  
  if (isLoading) {
    return <div>Loading...</div>; // Or your loading component
  }
  
  if (!UserType || UserType.type !== role) {
    return <Navigate to="/" replace />;
  }
  
  return element;
};

export default UserPermission;
