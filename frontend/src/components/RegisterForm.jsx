import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from'react-router-dom'

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const navigate = useNavigate()
  const submitData = () => {
    axios
      .post("http://127.0.0.1:8000/api/register/", {
        name: name,
        surname: surname,
        email: email,
        password: pass,
      })
      .then( (response)=> {
        console.log(response);
        navigate("/login");
      })
      .catch( (error) =>{
        console.log(error);
      });
  };

  return (
    <div>
      <label>Nombre</label>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setName(e.target.value)}
      />
      <label>Apellido</label>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setSurname(e.target.value)}
      />
      <label>Email</label>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Clave</label>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={submitData}>Registrase</button>
    </div>
  );
};

export default RegisterForm;
