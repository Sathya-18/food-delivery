// import React, {Component} from 'react';

import { useEffect, useState } from "react";
import FoodItems from "./item";

import './orderList.css'

function OrderList() {

    const [order, setOrder] = useState([]);

    useEffect(()=>{
        fetch('https://63131d36a8d3f673ffc48d03.mockapi.io/myorder').then((input)=>{
            return input.json()
        }).then((data)=>{
            setOrder(data)
        })
        
    },[])

    return (
        <div className="orderlist">
            {
            order.map((order) => {
                return <FoodItems key={order.id} id ={order.id} location={order.location} hotel={order.hotel} food={order.food} qty={order.qty}></FoodItems>
            })
        }
        </div>
    )
}

// class OrderList extends Component{
    
//     render(){
//         return(
//             <div className='orderlist'>
//             {
            
//             this.props.orders.map((order) => {
//                 return <FoodItems key={Math.random()} location={order.location} hotel={order.hotel} food={order.food} qty={order.qty}></FoodItems>
//             })
//         }
//         </div>
//         )
//     }
// }


export default OrderList;