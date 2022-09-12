import React,{useState} from 'react';
import './item.css';
import image from '../../assets/1.jpg';

function FoodItems(props){

    const location = useState(props.location);
    const hotel = useState(props.hotel);
    const food = useState(props.food);
    const qty = useState(props.qty);
    

    return(
        
        <div className='foodItem'>
            <div className='img'>
                <img src={image}></img>
            </div>
            <h3>{hotel}</h3>
            <p>{location}</p>
            <span>{food}</span>
            <span> - </span>
            <span>{qty}</span>
            
        </div>
    )
}

export default FoodItems;