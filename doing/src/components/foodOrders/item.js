import React,{useState} from 'react';
import './item.css';
import image from '../../assets/1.jpg';
import { useNavigate } from 'react-router-dom';

function FoodItems(props){

    const location = useState(props.location);
    const hotel = useState(props.hotel);
    const food = useState(props.food);
    const qty = useState(props.qty);
    var today = new Date();
    // var h = today.getHours();
    // var m = today.getMinutes();
    // var s = today.getSeconds();
    // var ampm = "AM"

    // if (h>12){
    //     h= h-12;
    //     ampm = "PM"

    // }

    const navigate = useNavigate();

    const view=()=>{
        navigate('/myorder/'+props.id)
    }
    
    var time = today.toLocaleTimeString();


    return(
        
        <div className='foodItem' onClick={view}>
            <div className='img'>
                <img src={image} alt='food'></img>
            </div>
            <h3>{hotel}</h3>
            <p>{location}</p>
            <span>{food}</span>
            <span> - </span>
            <span>{qty}</span>
            <p>Ordered time : <b><span>{time}</span></b></p>
            
        </div>
    )
}

export default FoodItems;