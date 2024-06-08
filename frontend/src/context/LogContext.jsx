import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const LogContext = createContext();

export const useLogin = () => useContext(LogContext);

export const LogProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = async (email, password) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/", {
        email: email,
        password: password,
      });
      setUser(response.data.user);
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Login failed:", error.response.data);
    }
  };

  return (
    <LogContext.Provider value={{ user, login }}>
      {children}
    </LogContext.Provider>
  );
};
