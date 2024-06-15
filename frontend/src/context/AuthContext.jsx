// AuthContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "../manageAxios/api";

const AuthContext = createContext();

export const useLog = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      axios
        .get("/profile/")
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const signIn = async (userData) => {
    try {
      const response = await axios.post("/login/", userData);
      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);
      const userResponse = await axios.get("/profile/");
      setUser(userResponse.data);
    } catch (error) {
      throw error.response
        ? error.response.data
        : new Error("Error desconocido");
    }
  };

  const signOut = async () => {
    try {
      await axios.post("/logout/");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      setUser(null);
    } catch (error) {
      throw error.response
        ? error.response.data
        : new Error("Error desconocido");
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
