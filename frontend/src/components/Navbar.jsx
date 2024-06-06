import React, { useEffect, useState } from "react";
import logo from "../assets/logo/logo-pequeño.png";
import { Link } from "react-router-dom";
import CartComponent from "./CartComponent";
import { useData } from "../context/CartContext";
export const Navbar = () => {
  const { cart } = useData();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark fs-6 py-0">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarOfertas">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="d-flex">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Centro de Ayuda
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Estado de tu pedido
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Medios de Envio
                  </a>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle text-white"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Nuestros Destacados
                    </button>
                    <ul className="dropdown-menu"></ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">
            <img width="80" height="70" src={logo} alt="" srcSet="" />
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
              <li className="nav-item">
                <div className="dropdown ps-2">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-location-dot fs-4 text-success me-1"></i>
                    Elige tu modo de entrega
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item d-block" type="button">
                        Action
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Another action
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Something else here
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="col-sm-12 col-lg-4 col-xl-6">
              <form className="d-flex" role="search">
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="¿Qué estas buscando?"
                    aria-label="¿Qué estas buscando?"
                  />
                  <span
                    role="button"
                    type="submit"
                    className="input-group-text bg-success"
                    id="basic-addon2"
                  >
                    <i className="fa-solid fa-magnifying-glass text-light"></i>
                  </span>
                </div>
              </form>
            </div>

            <div className="dropdown nav-link">
              <button
                className="btn dropdown-toggle fw-bold"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-regular fs-4 fa-user text-success px-1"></i>
                Ingresa/Registrate
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item d-block" type="button">
                    <Link
                      className="text-decoration-none text-dark"
                      to="/login"
                    >
                      Ingresar
                    </Link>
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item d-block text-success"
                    type="button"
                  >
                    <Link className="text-success fw-bold" to="/SignUp">
                      Registarse
                    </Link>
                  </button>
                </li>
              </ul>
            </div>
            <button
              className="btn position-relative fa-solid fa-cart-shopping pt-1"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#carrito"
              aria-controls="offcanvasRight"
            >
              {cart.length<=0?'':<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
              </span>}
            </button>
          </div>
        </div>
      </nav>
      <CartComponent />
    </>
  );
};
