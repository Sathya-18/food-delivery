import './nameHolder.css';

import Name from './name'

import {useState, useEffect} from "react";

function NameHolder() {

    // let list = props.nameList;

    const [hotels, setHotels] = useState([]);

    useEffect(()=>{
        fetch('https://63131d36a8d3f673ffc48d03.mockapi.io/hotels').then((response)=>{
          return response.json()
          
        }).then((data)=>{
          setHotels(data)
        })
      },[]);

    return (
        <div className='container'>
            <div className='text'>
                <h1>About the food culture in Tenkasi</h1>
                <br />
                <p>Order food and beverages online from restaurants near & around you. We deliver food from your neighborhood local joints, your favorite cafes, luxurious & elite restaurants in your area. Exciting bit? We place no minimum order restrictions! Order in as little (or as much) as you'd like. We'll deliver it to you!</p>
            </div>
            <br />
            <div><h1>Popular restaurants in and around Tenkasi</h1></div>
            {/* <div className='wrapper'>
                <Name name={list[0].name}
                    food={list[0].food}
                    rating={list[0].rating}
                    image={list[0].image}></Name>
                <Name name={list[1].name}
                    food={list[1].food}
                    rating={list[1].rating}
                    image={list[1].image}></Name>
                <Name name={list[2].name}
                    food={list[2].food}
                    rating={list[2].rating}
                    image={list[2].image}></Name>
                <Name name={list[3].name}
                    food={list[3].food}
                    rating={list[3].rating}
                    image={list[3].image}></Name>
                <Name name={list[4].name}
                    food={list[4].food}
                    rating={list[4].rating}
                    image={list[4].image}></Name>
                <Name name={list[5].name}
                    food={list[5].food}
                    rating={list[5].rating}
                    image={list[5].image}></Name>
            </div> */}
            <div className='wrapper'>
                {
                    hotels.map((details) => {
                        return (
                            <Name key={details.id} Id={details.id} image={details.image} name={details.name} food={details.food} rating={details.rating}></Name>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default NameHolder;