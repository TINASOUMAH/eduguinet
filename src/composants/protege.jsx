import React from 'react';
import { Navigate } from 'react-router-dom';

// Ce composant vérifie si l'utilisateur est authentifié
export default function ProtectedRoute({ children, isAuthenticated }) {
  if (!isAuthenticated) {
    // Si l'utilisateur n'est pas connecté, il est redirigé
    return <Navigate to="/" replace />;
  }
  return children; // Affiche la page demandée
}