// CreateOrder.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateOrder = () => {
    const [user, setUser] = useState('');
    const [orderDetails, setOrderDetails] = useState([{ product: '', quantity: 1, price: 0 }]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            user: user,
            order_details: orderDetails,
        };

        axios.post('http://localhost:8000/api/create_order/', data)
            .then(response => {
                console.log('Order created:', response.data);
            })
            .catch(error => {
                console.error('There was an error creating the order!', error);
            });
    };

    const handleOrderDetailChange = (index, event) => {
        const newOrderDetails = orderDetails.map((detail, i) => {
            if (i !== index) return detail;
            return { ...detail, [event.target.name]: event.target.value };
        });
        setOrderDetails(newOrderDetails);
    };

    const handleAddOrderDetail = () => {
        setOrderDetails([...orderDetails, { product: '', quantity: 1, price: 0 }]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                User:
                <input type="text" value={user} onChange={(e) => setUser(e.target.value)} required />
            </label>
            {orderDetails.map((detail, index) => (
                <div key={index}>
                    <label>
                        Product:
                        <input type="text" name="product" value={detail.product} onChange={(e) => handleOrderDetailChange(index, e)} required />
                    </label>
                    <label>
                        Quantity:
                        <input type="number" name="quantity" value={detail.quantity} onChange={(e) => handleOrderDetailChange(index, e)} required />
                    </label>
                    <label>
                        Price:
                        <input type="number" name="price" value={detail.price} onChange={(e) => handleOrderDetailChange(index, e)} required />
                    </label>
                </div>
            ))}
            <button type="button" onClick={handleAddOrderDetail}>Add Order Detail</button>
            <button type="submit">Create Order</button>
        </form>
    );
};

export default CreateOrder;
