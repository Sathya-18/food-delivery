import React, { useState } from "react";

import NewForm from "./form";

import OrderList from "./orderList";

import './myOrder.css'

function MyOrder(props) {
    const [orders, setorders] = useState([]);

    const addNewOrder = (order) => {
        setorders((prevOrder) => { return [order, ...prevOrder] });
        // console.log(order);
    }

    const logout = () => {
        props.logout(false)
    }


    return (
        <div className="body">
            <button onClick={logout} className='logout'>Log out</button>
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
