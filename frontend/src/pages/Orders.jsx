import React from "react";
import OrderList from "../components/OrderList";

const Orders = () => {
  return (
    <div className="container-fluid px-5">
      <h1>Mis pedidos</h1>
      <OrderList />
    </div>
  );
};

export default Orders;
