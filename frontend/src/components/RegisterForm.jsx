import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo-login.png";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const [error,setError]=useState("")
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let data=watch();
    const submitData = async () => {
    await axios
      .post("http://127.0.0.1:8000/api/register/", {
        name: data.firstName,
        surname: data.surName,
        email: data.email,
        password: data.pass,
      })
      .then((response) => {
        console.log(response);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data.error)
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
                    onSubmit={handleSubmit(submitData)}
                  >
                    <div className="d-flex flex-row align-items-center mb-3">
                      <i className="fas fa-user fa-lg me-3"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="nameUser">
                          Nombre
                        </label>
                        <input
                          {...register("firstName", {
                            required: true,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i,
                          })}
                          className="form-control"
                          placeholder="Nombre"
                        />
                        {errors?.firstName?.type === "required" && (
                          <div className="text-danger">Campo requerido</div>
                        )}
                        {errors?.firstName?.type === "maxLength" && (
                          <div className="text-danger">No puede exceder los veinte caracteres</div>
                        )}
                        {errors?.firstName?.type === "pattern" && (
                          <div className="text-danger">Solo caracteres alfabeticos</div>
                        )}
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-3">
                      <i className="fas fa-user fa-lg me-3"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="surname">
                          Apellido
                        </label>
                        <input
                          {...register("surName", {
                            required: true,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i,
                          })}
                          className="form-control"
                          placeholder="Apellido"
                        />
                        {errors?.surName?.type === "required" && (
                          <div className="text-danger">Campo requerido</div>
                        )}
                        {errors?.surName?.type === "maxLength" && (
                          <div className="text-danger">No puede exceder los veinte caracteres</div>
                        )}
                        {errors?.surName?.type === "pattern" && (
                          <div className="text-danger">Solo caracteres alfabeticos</div>
                        )}
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-3">
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
                          {...register("email", {
                            required: true,
                            pattern:
                              /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm,
                          })}
                        />
                        {errors?.email?.type === "required" && (
                          <div className="text-danger">Campo requerido</div>
                        )}
                        {errors?.email?.type === "pattern" && (
                          <div className="text-danger">Ingresa un correo valido</div>
                        )}
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-3">
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
                          {...register("pass", {
                            required: true,
                            minLength: 6,
                            pattern:
                              /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
                          })}
                        />
                        {errors?.pass?.type === "required" && (
                          <div className="text-danger">Campo requerido</div>
                        )}
                        {errors?.pass?.type === "minLength" && (
                          <div className="text-danger">Minimo 6 caracteres</div>
                        )}
                        {errors?.pass?.type === "pattern" && (
                          <div className="text-danger">
                            Al menos una mayuscula,minuscula y numero
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-3">
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
                          {...register("confirmPass", {
                            required: true,
                            validate: value=>value===data.pass,
                          })}
                        />
                        {errors?.confirmPass?.type === "required" && (
                          <div className="text-danger">Campo requerido</div>
                        )}
                        {errors?.confirmPass?.type === "validate" && (
                          <div className="text-danger">
                            Las contraseñas no coinciden
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" className="btn btn-success btn-lg">
                        Registrarse
                      </button>
                    </div>
                      {error&&<div className="d-flex justify-content-center text-danger">{error}</div>}
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
