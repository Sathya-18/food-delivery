import { useState } from 'react';
import './form.css'
// import OrderList from './orderList';
// import MyOrder from './myOrder'

function NewForm(props) {

    const [newOrder, setOrder] = useState({
        location: '',
        hotel: '',
        food: '',
        qty: ''
    })

    const eventHandler1 = (event) => {
        setOrder((oldState) => {
            return ({ ...oldState, location: event.target.value })

        })
        // console.log(event.target.value);
        // setOrder({...newOrder, location :event.target.value});
    }
    const eventHandler2 = (event) => {
        setOrder((oldState) => {
            return ({ ...oldState, hotel: event.target.value })
        })
        // setOrder({...newOrder, hotel :event.target.value});
    }
    const eventHandler3 = (event) => {
        setOrder((oldState) => {
            return ({ ...oldState, food: event.target.value })
        })
        // setOrder({...newOrder, food :event.target.value});
    }
    const eventHandler4 = (event) => {
        setOrder((oldState) => {
            return ({ ...oldState, qty: event.target.value })
        })
        // setOrder({...newOrder, qty :event.target.value});
    }

    const submitting = (event) => {
        event.preventDefault();
        setOrder({
            location: '',
            hotel: '',
            food: '',
            qty: ''
        })
        props.add(newOrder);
    }


    return (
            <form onSubmit={submitting}>
                <input type="text" placeholder='Location nearby...' value={newOrder.location} onChange={eventHandler1} required/>
                <input type="text" placeholder='Hotel' value={newOrder.hotel} onChange={eventHandler2} required/>
                <input type="text" placeholder='Food name' value={newOrder.food} onChange={eventHandler3} required/>
                <input type="number" placeholder='Quantity' value={newOrder.qty} onChange={eventHandler4} required/>
                <button type='submit' className='order' >Add Order</button>
            </form>

    )
}

export default NewForm;