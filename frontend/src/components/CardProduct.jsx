import React from "react";
import "../styles/CardProduct.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


export const CardProduct = ({
  prod
}) => {
  const{addToCart}=useCart();
  return (
    <>
      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-5">
        <div className="card h-100 border border-0 p-1">
          <Link to={`/product-detail/${prod.id}`}>
            <img src={prod.image} className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h5 className="card-title fw-bold">${prod.price}</h5>
            <div className="fw-light">
              <span className="badge text-bg-secondary bg-opacity-25">
                1 un
              </span>
            </div>
            <div className="fw-light">{prod.brand}</div>
            <p className="card-text text-truncate-multiline">{prod.name}</p>
            <div className="d-grid col-12">
              {prod.stock >= 1 ? (
                <button className="btn btn-success text-center fw-bold" onClick={()=>{
                  addToCart(prod)
                }}>
                  Agregar
                </button>
              ) : (
                <button className="btn btn-dark-subtle text-center" disabled>
                  Producto sin stock
                </button>
              )}
            </div>
          </div>
          <div className="justify-content-start">
            <i className="fa-solid fa-star text-warning"></i>
            {prod.rating}
          </div>
        </div>
      </div>
    </>
  );
};
