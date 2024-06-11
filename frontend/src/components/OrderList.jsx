import React from "react";

const OrderList = () => {
  let items = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {/* agregar map de los productos del cliente */}
      {items.map((i) => {
        return <OrderItem key={i} item={i} />;
      })}
    </>
  );
};
const OrderItem = ({ item }) => {
  return (
    <>
      <div className="card mb-3 border-0" /* style="max-width: 540px;" */>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://placehold.co/600x400" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item}</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderList;
