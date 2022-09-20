import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Orders(){
    const [order, setOrder] = useState(null);
    const path = useParams();
    
    useEffect(()=>{
        console.log(path.orderid);
        fetch('https://63131d36a8d3f673ffc48d03.mockapi.io/myorder/'+path.orderid).then((response)=>{
            if(response.ok){
                return response.json()
            }
            return false;
        }).then((response)=>{
            if(response){
                setOrder(response);
            }
        })
    }, [path.orderid]);

    return(
        <div>
            {
                order && <div>
                    <h3>{order.hotel}</h3>
                    <p>{order.location}</p>
                    <p>{order.qty}</p>
                </div>
            }
        </div>
    )
}

export default Orders;