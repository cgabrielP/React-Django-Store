import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from'react-router-dom'


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleLogin = () => {
    axios
      .post("http://127.0.0.1:8000/api/login/", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        navigate('/')
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      });
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
