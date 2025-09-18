import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, roles }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/" replace />;

  if (roles) {
    if (Array.isArray(roles) && !roles.includes(user.role)) return <Navigate to="/" replace />;
    if (typeof roles === "string" && user.role !== roles) return <Navigate to="/" replace />;
  }

  return children;
}
