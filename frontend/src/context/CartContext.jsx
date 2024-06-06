import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const useData = () => useContext(GlobalContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
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

  const sumValue = (cartProducts) => {
    let totalValue = 0;
    cartProducts.forEach((item) => {
      totalValue += item.price * item.quantity;
    });
    setTotal(totalValue);
  };

  const addToCart = (product, amount = 1) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    //funcion que itera sobre el arreglo para encontrar la posicion segun la condicion
    const index = storedCart.findIndex((item) => item.id === product.id);

    if (index === -1) {
      //creamos con spread operator una copia de lo que habia en el carrito y tambien un objeto en base al producto
      const updatedCart = [...storedCart, { ...product, quantity: amount }];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      sumValue(updatedCart);
    } else {
      const updatedCart = [...storedCart];
      updatedCart[index].quantity += amount;
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      sumValue(updatedCart);
    }
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    sumValue(storedCart);
  }, []);
  return (
    <GlobalContext.Provider value={{ products,total, cart, addToCart }}>
      {children}
    </GlobalContext.Provider>
  );
};
