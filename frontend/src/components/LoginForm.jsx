import axios from "axios";
import React, { useState } from "react";
import { useLogin } from "../context/LogContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();


  const handleLogin = () => {
    login(email, password);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
