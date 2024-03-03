// ProductContext.js
"use client";
import React, { createContext, useState } from "react";
import { loginAdmin, logoutAdmin } from "@/api/FirebaseApi";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      await loginAdmin(email, password);
      setUser(email); // Assuming you want to store the email of the logged-in user
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await logoutAdmin();
      setUser(null); // Clear user state upon successful logout
    } catch (error) {
      console.error("Error logging out:", error);
      setError(error.message);
    }
  };

  const value = {
    user,
    error,
    loginAdmin: handleLogin,
    logoutAdmin: handleLogout,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};
