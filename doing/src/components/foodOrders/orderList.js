import React, {Component} from 'react';

import FoodItems from "./item";

import './orderList.css'

// function OrderList(props) {

//     return (
//         <div>
//             {
//             props.orders.map((order) => {
//                 return <FoodItems key={Math.random()} location={order.location} hotel={order.hotel} food={order.food} qty={order.qty}></FoodItems>
//             })
//         }
//         </div>
//     )
// }

class OrderList extends Component{
    
    render(){
        return(
            <div className='orderlist'>
            {
            
            this.props.orders.map((order) => {
                return <FoodItems key={Math.random()} location={order.location} hotel={order.hotel} food={order.food} qty={order.qty}></FoodItems>
            })
        }
        </div>
        )
    }
}


export default OrderList;