import React, { useState } from "react";

import NewForm from "./form";

import OrderList from "./orderList";

import './myOrder.css';



function MyOrder() {
    const [orders, setorders] = useState([]);

    const addNewOrder = (order) => {
        setorders((prevOrder) => { return [order, ...prevOrder] });
        // console.log(order);
    }


    return (
        <div className="body">
            <NewForm add={addNewOrder} />
            <div className="myorder">
                <div>
                    <h1>My Orders</h1>
                    <OrderList orders={orders}></OrderList>
                </div>
            </div>
        </div>
    )
}

export default MyOrder;
