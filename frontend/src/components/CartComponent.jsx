import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const CartComponent = () => {
  const { cart, total } = useCart();

  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="carrito"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fw-bold" id="carrito">
            Tienes {cart.length} producto(s)
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column">
          {cart.map((item,index) => {
            return <CartItem key={index} item={item} />;
          })}

          <div className="offcanvas-footer mt-auto">
            <div className="row pb-3">
              <div className="col-9">Subtotal</div>
              <div className="col-3">${total}</div>
            </div>
            <div className="row pb-3">
              <div className="col-10 fs-6 fw-light">
                Monto minimo de compras <b>$10.000</b>
              </div>
            </div>
            <div className="row pb-3 d-flex justify-content-end">
              {total >= 10000 ? (
                <div className="col-5 btn btn-success">Comprar</div>
              ) : (
                <div className="col-5 btn btn-outline-secondary" disabled>
                  Comprar
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CartItem = ({ item }) => {
  return (
    <>
      <div className="row border-bottom">
        <div className="col-9">
          <div className="mb-3">
            <div className="row g-0">
              <div className="col-md-5">
                <img
                  src={item.image}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <div className="card-title fs-6">{item.description}</div>
                  <div
                    className="btn-group align-items-center mt-2"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" className="btn btn-success">
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                    <div className="px-1">1 un.</div>
                    <button type="button" className="btn btn-success">
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="fw-bold">${item.price}</div>
          <div
            role="button"
            className="fw-bold mt-5 text-success text-decoration-underline"
          >
            Eliminar
          </div>
        </div>
      </div>
    </>
  );
};

export default CartComponent;
