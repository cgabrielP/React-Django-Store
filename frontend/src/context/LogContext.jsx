import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const LogContext = createContext();

export const useLogin = () => useContext(LogContext);

export const LogProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  const login = async (username, password) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/", {
        username: username,
        password: password,
      });
      setUser(response.data.user);
      return { success: true, user: response.data.user };
    } catch (error) {
      console.error("Login failed:", error.response.data);
      setUser(null);
      return { success: false, error: error.response.data };
    }
  };
  useEffect(()=>{
    const storedUser = JSON.parse(localStorage.getItem("user")) || null
    setUser(storedUser)
  },[])

  return (
    <LogContext.Provider value={{ user, login,logout }}>
      {children}
    </LogContext.Provider>
  );
};
