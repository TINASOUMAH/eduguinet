// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { userService } from "../service/users";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // Login
  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await userService.login(email, password);

      // Stocker uniquement les données nécessaires
      const currentUser = {
        _id: res._id,
        name: res.name,
        email: res.email,
        role: res.role
      };

      setUser(currentUser);
      return currentUser;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Register
  const register = async (data) => {
    setLoading(true);
    try {
      const res = await userService.create(data);

      const currentUser = {
        _id: res._id,
        name: res.name,
        email: res.email,
        role: res.role
      };

      setUser(currentUser);
      return currentUser;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
