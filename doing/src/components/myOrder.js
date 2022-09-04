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
            <button onClick={logout}>Log out</button>
            <NewForm add={addNewOrder} />
            <div className="myorder">
                <div>
                    <p>My Orders</p>
                    <br />
                    <hr />
                    <br />
                    <div className="wrap">
                        <table>
                            <tr>
                                <td>Location</td>
                                <td>Hotel</td>
                                <td>Food</td>
                                <td>Quantity</td>
                            </tr>
                        </table>
                    </div>
                    <OrderList orders={orders}></OrderList>
                </div>
            </div>
        </div>
    )
}

export default MyOrder;
