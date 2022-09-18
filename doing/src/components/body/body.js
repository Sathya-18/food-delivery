import { Fragment } from 'react';
import './body.css';

import NameHolder from '../hotels/nameHolder';
// import img1 from '../../assets/1.jpg';
// import img2 from '../../assets/2.jpg';
// import img3 from '../../assets/3.jpg';
// import img4 from '../../assets/4.jpg';
// import img5 from '../../assets/5.jpg';
// import img6 from '../../assets/6.jpg';
// import MyOrder from '../foodOrders/myOrder';
// import Login from '../login/login';
// import {Routes, Route} from 'react-router-dom';
// import logo from '../../assets/logo.png';
// import {Outlet} from 'react-router-dom';
import img1 from '../../assets/search.png';
import img2 from '../../assets/burger.png';
import img3 from '../../assets/money.png';
import img4 from '../../assets/delivery.png';

function Body() {

  // const images = [img1,img2,img3,img4,img5,img6]

  // const Hotels = [
  //   {
  //     name: "Eat & Run Restaurant",
  //     food: "Pizzas, Italian, Beverages",
  //     rating: "4.8",
  //     image: img1
  //   },
  //   {
  //     name: "S.G Sweets & Bakery",
  //     food: "Beverages, Italian, Snacks, Cakes",
  //     rating: "4.4",
  //     image: img2
  //   },
  //   {
  //     name: "Rahmath parotta stall",
  //     food: "Parotta, Biriyani, Chicken",
  //     rating: "4.6",
  //     image: img3
  //   },
  //   {
  //     name: "S.K.M Hotel",
  //     food: "South Indian, Snacks, Tea & Coffee",
  //     rating: "5.0",
  //     image: img4
  //   },
  //   {
  //     name: "Pothigai Hotel",
  //     food: "South indian, Veg-meals",
  //     rating: "4.0",
  //     image: img5
  //   },
  //   {
  //     name: "Sultan kebab center",
  //     food: "Shawarma, Bread-omlette",
  //     rating: "4.3",
  //     image: img6
  //   }
  //   {
  //     name: "Tenkasi fried chicken",
  //     food: "Shawarma, Bread-omlette",
  //     rating: "4.8",
  //     image: img6
  //   }
  // ]


  // const [isLoggedin, setLoggedIn] = useState('false');



  // const loginHandler = (islogin) => {
  //   localStorage.setItem('login', islogin)
  //   setLoggedIn(islogin);

  // }

  // const [hotels, setHotels] = useState([]);

  // useEffect(()=>{
  //   // setLoggedIn(localStorage.getItem('login'))
  //   fetch('https://63131d36a8d3f673ffc48d03.mockapi.io/hotels').then((response)=>{
  //     return response.json()

  //   }).then((data)=>{
  //     // data.forEach((dat,i)=>{
  //     //   dat.image = images[i%images.length]
  //     // })
  //     setHotels(data)
  //   })
  // },[]);


  return (
    <Fragment>
      {/* <header>
        <div className='container'>
          <div className='header-wrapper'>
            <img src={logo}></img>
            <nav>
              <Link to="about">About</Link>
              
              
            </nav>
          </div>
        </div>
      </header> */}
      <section className='content'>
        <div className='find-food'>
          <div className='container'>
            <h1>Great restaurants in Tenkasi, delivering to you</h1>
            <p>Set exact location to find the right restaurants near you.</p>
            <input type='text' id='txt' placeholder='Location...' />
            <input type='button' value='Find Food' id='btn' />
          </div>
        </div>
        <div className='back'></div>
        <div className='container2'>
          {/* {isLoggedin==="true" ? <MyOrder logout={loginHandler}/> : <Login isLoggedin={loginHandler}/>} */}
          <div className='container3'>
            <div className='steps'>
              <div className='boxs'>
                <img src={img1}></img>
                <h1>Search</h1>
                <p>Find all restaurants available near you</p>
              </div>
              <div className='boxs'>
                <img src={img2}></img>
                <h1>Choose</h1>
                <p>Browse hundreds of menus to find the food you like</p>
              </div>
              <div className='boxs'>
                <img src={img3}></img>
                <h1>Pay</h1>
                <p>It's quick, secure and easy</p>
              </div>
              <div className='boxs'>
                <img src={img4}></img>
                <h1>Delivery</h1>
                <p>Food is prepared & delivered to your door</p>
              </div>

            </div>
          </div>
        </div>

        {/* <NameHolder nameList={hotels}></NameHolder> */}
        <NameHolder></NameHolder>

      </section>
    </Fragment>
  )
}

export default Body;