import React,{useState} from 'react';
import './item.css'

function FoodItems(props){

    const location = useState(props.location);
    const hotel = useState(props.hotel);
    const food = useState(props.food);
    const qty = useState(props.qty);

    return(
        
        <div className='foodItem'>
            {/* <div>
                <img>image</img>
            </div> */}
            <table>
                <tr>
                    <td>{location}</td>
                    <td>{hotel}</td>
                    <td>{food}</td>
                    <td>{qty}</td>
                </tr>
            </table>
        </div>
    )
}

export default FoodItems;