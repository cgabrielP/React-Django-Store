import React, { useState } from "react";
import { useLogin } from "../context/LogContext";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo/logo-login.png'

const LoginForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useLogin();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    const result = await login(user, password);
    if (result.success) {
      localStorage.setItem('user',JSON.stringify(result.user));
      navigate("/");
    } else {
      setError(result.error.error);
    }
  };
  

  return (
    
      <div className="container h-100 mt-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      INICIO SESI&Oacute;N
                    </p>
                    {error?<p className="alert alert-danger text-center">{error}</p>:''}
                    <form className="mx-1 mx-md-4" onSubmit={handleLogin}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="login-user">
                            Correo Electr&oacute;nico
                          </label>
                          <input
                            type="text"
                            id="login-user"
                            className="form-control"
                            placeholder="Correo Electrónico"
                            onChange={(e)=>{
                              setUser(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="login-passwd">
                            Contrase&ntilde;a
                          </label>
                          <input
                            type="password"
                            id="login-passwd"
                            className="form-control"
                            placeholder="Contraseña"
                            onChange={(e)=>{
                              setPassword(e.target.value)
                            }}
                            required
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          className="btn btn-success btn-lg"
                          type="submit"
                        >
                          Iniciar Sesi&oacute;n
                        </button>
                      </div>
                    </form>
                    <div className="text-center">
                      O{" "}
                      <Link to="/signUp" className="text-success">
                        registrarse
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 justify-content-center">
                    <img
                      src={logo}
                      className="img-fluid"
                      alt="company logo"
                      title="The Flix House"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default LoginForm;
