import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo-login.png";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const navigate = useNavigate();
  const submitData = () => {
    axios
      .post("http://127.0.0.1:8000/api/register/", {
        name: name,
        surname: surname,
        email: email,
        password: pass,
      })
      .then((response) => {
        console.log(response);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container h-100 my-4 p-3">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black">
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    REGISTRO
                  </p>
                  <form
                    className="mx-1 mx-md-4 p-2"
                    id="miRegistro"
                    onSubmit={submitData}
                  >
                    <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="nameUser">
                          Nombre
                        </label>
                        <input
                          type="text"
                          id="nameUser"
                          className="form-control"
                          placeholder="Nombre"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="surname">
                          Apellido
                        </label>
                        <input
                          type="text"
                          id="surname"
                          className="form-control"
                          placeholder="Apellido"
                          onChange={(e) => setSurname(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="email">
                          Correo Electrónico
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Correo Electrónico"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="password">
                          Contraseña
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          placeholder="Contraseña..."
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-key fa-lg me-3"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label
                          className="form-label"
                          htmlFor="passwordConfirmation"
                        >
                          Confirmar Contraseña
                        </label>
                        <input
                          type="password"
                          id="passwordConfirmation"
                          className="form-control"
                          placeholder="Confirmar Contraseña..."
                        />
                      </div>
                    </div>
                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form-privacid"
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form-privacid"
                      >
                        Estoy de acuerdo con todas las
                        <a className="text-success" href="#!">
                          política de privacidad.
                        </a>
                      </label>
                    </div>
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" className="btn btn-success btn-lg">
                        Registrarse
                      </button>
                    </div>
                  </form>
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

export default RegisterForm;
