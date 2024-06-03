import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const addToCart=(item)=> {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
}


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        await axios
          .get(`http://127.0.0.1:8000/api/products/${id}`)
          .then((response) => {
            if (response.request.status !== 200) {
              throw new Error("Network response was not ok");
            }
            setProduct(response.data);
            setLoading(false);
          });
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="spinner-border d-flex " role="status">
        <span className="visually-hidden justify-content-center">
          Cargando...
        </span>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>Producto no encontrado</div>;
  }
  return (
    <>

        <div className="container my-5">
          <div className="row">
            <div className="col-md-6">
              <img src={product.image} className="img-fluid" alt={product.description} />
            </div>
            <div className="col-md-6">
              <h1 className="display-5">{product.description}</h1>
              <h2 className="text-muted">${product.price}</h2>
              <div className="mb-3">
                <span className="badge bg-secondary">1 un</span>
              </div>
              <div className="mb-3">
                <i className="fa-solid fa-star text-warning me-1"></i>
                {product.rating}
              </div>
              {product.stock>=1?<p>Existencias {product.stock}</p>:<p>Producto sin existencias</p>}
              <div
                className="btn-group align-items-center "
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
              <br/>

              {product.stock >= 1 ? (
                <button
                  className="btn btn-success w-50 mt-3"
                  onClick={() => {
                    addToCart(product)
                  }}
                >
                  Agregar al carrito
                </button>
              ) : (
                <button className="btn btn-dark-subtle w-50 mt-3" disabled>
                  Producto sin stock
                </button>
              )}
              <button className="btn btn-light w-10 mt-3 ms-1">
                <i className="fa-solid fa-star text-warning"></i>
              </button>
            </div>
          </div>
        </div>

    </>
  );
};

export default ProductDetail;
