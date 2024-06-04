import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext=createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {

    const[cart,setCart]=useState([]);
    const [total, setTotal] = useState(0);
    
    const sumValue = (cartProducts) => {
        let totalValue = 0;
        cartProducts.forEach((item) => {
          console.log(item);
          totalValue += item.price;
        });
        setTotal(totalValue);
      };
    const addToCart = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        sumValue(updatedCart);
      };
      useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
        sumValue(storedCart);
      }, []);
  return (
    <CartContext.Provider value={{total,cart,addToCart}}>
        {children}
    </CartContext.Provider>
  )
}
