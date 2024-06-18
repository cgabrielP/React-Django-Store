import React, { useState } from "react";
import axios from "axios";
import { useLog } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/CartContext";

const CreateOrder = () => {
  const { user } = useLog();
  const { cart } = useData();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const orderDetails = cart.map((item) => ({
      product: item.id,
      quantity: item.quantity,
      price: item.price,
    }));
    const data = {
      user: user.id,
      order_details: orderDetails,
    };

    axios
      .post("http://127.0.0.1:8000/api/create_order/", data)
      .then((response) => {
        console.log("Order created:", response.data);
      })
      .catch((error) => {
        console.error("There was an error creating the order!", error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {cart.map((item, index) => (
          <div key={index}>
            <div>{item.id}</div>
            <div>{item.name}</div>
          </div>
        ))}

        <button type="submit">Pedir</button>
      </form>
    </>
  );
};

export default CreateOrder;
