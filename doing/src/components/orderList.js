import React, {Component, Fragment} from 'react';

import FoodItems from "./item";

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
            <Fragment>
            {
            
            this.props.orders.map((order) => {
                return <FoodItems key={Math.random()} location={order.location} hotel={order.hotel} food={order.food} qty={order.qty}></FoodItems>
            })
        }
        </Fragment>
        )
    }
}


export default OrderList;