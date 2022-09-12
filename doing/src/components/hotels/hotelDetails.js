import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Hotel() {
    const [hotel, setHotel] = useState(null);
    const path = useParams()

    useEffect(() => {
        console.log(path.hotelId);
        fetch('https://63131d36a8d3f673ffc48d03.mockapi.io/hotels/'+path.hotelId).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return false;
        }).then((response) => {
            if (response) {
                setHotel(response);
            }
        })
    }, [path.hotelId]);

    return (
        <Fragment>
            {
                hotel && <div>
                    <img src={hotel.image} />
                    <h3>{hotel.name}</h3>
                    <p>{hotel.food}</p>
                    <p>{hotel.rating}</p>
                </div>
            }
        </Fragment>
    )
}

export default Hotel;