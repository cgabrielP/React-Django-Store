import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardProduct } from "./CardProduct";
import { useData } from "../context/CartContext";

export const CardList = () => {
  const {products}=useData();
/*   const [products, setProducts] = useState([]);
    
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
      });
      
  }, []); */

  return (
    <div className="container">
      <div className="row my-3 d-flex justify-content-start">
        {products.map((prod,index) => {
          return (
            <CardProduct
              key={index}
              prod={prod}
            />
          );
        })}
      </div>
    </div>
  );
};
