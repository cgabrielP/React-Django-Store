import React from "react";

export const CardProduct = ({ title,price,brand,rating }) => {
  return (
    <>
      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-5">
        <div className="card border border-0 p-1">
          <a href="detalle.html">
            <img
              src="https://placehold.co/600x400"
              className="card-img-top"
              alt="..."
            />
          </a>
          <div className="card-body">
            <h5 className="card-title fw-bold">${price}</h5>
            <div className="fw-light">
              <span className="badge text-bg-secondary bg-opacity-25">1 un</span>
            </div>
            <div className="fw-light">{brand}</div>
            <p className="card-text">{title}</p>
            <div className="d-grid col-12">
              <a
                href="#"
                className="btn btn-success text-center fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#modalAviso"
              >
                Agregar
              </a>
            </div>
          </div>
          <div className="justify-content-start">
            <i className="fa-solid fa-star text-warning"></i>
            {rating}
          </div>
        </div>
      </div>
    </>
  );
};
