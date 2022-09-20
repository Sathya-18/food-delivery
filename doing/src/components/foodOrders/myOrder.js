import NewForm from "./form";

import OrderList from "./orderList";

import './myOrder.css';
import { useState } from "react";


function MyOrder() {

    const [order, setorder] = useState([]);

    const addNewOrder = (order) => {
        fetch('https://63131d36a8d3f673ffc48d03.mockapi.io/myorder', {
            method: 'POST',
            headers: {
                'Accept': 'application/json,text/plain,*/*',
                'Content-Type': 'application/json',
                'Accept-Charset': 'utf-8'
            },
            body: JSON.stringify(order)
        }).then(response => response.json());

        setorder((prev)=>{
            return [order, ...prev]
        });

    }


    return (
        <div className="container11">
        <div className="body">
            <div className="order1">
            <NewForm add={addNewOrder} />
            </div>
            <div className="myorder">
                <div>
                    <h1>My Orders</h1>
                    <OrderList orders={order}></OrderList>
                </div>
            </div>
        </div>
        </div>
    )
}

export default MyOrder;
