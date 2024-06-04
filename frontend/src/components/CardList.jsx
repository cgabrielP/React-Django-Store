import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardProduct } from "./CardProduct";

export const CardList = () => {
  const [products, setProducts] = useState([]);
    
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
      });
      
  }, []);

  return (
    <div className="container">
      <div className="row my-3 d-flex justify-content-start">
        {products.map((prod) => {
          return (
            <CardProduct
              key={prod.id}
              id={prod.id}
              title={prod.name}
              price={prod.price}
              brand={prod.brand}
              image={prod.image}
              rating={prod.rating}
              stock={prod.stock}
            />
          );
        })}
      </div>
    </div>
  );
};
