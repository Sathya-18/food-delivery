import './App.css';

import Footer from './components/footer/footer';
import Body from './components/body/body';
import Header from './components/header/header';
import About from './components/about/about'
import Login from './components/login/login';
import { useState } from 'react';
import {Routes, Route} from "react-router-dom";
import MyOrder from  './components/foodOrders/myOrder';
import Hotel from './components/hotels/hotelDetails';
import NameHolder from './components/hotels/nameHolder';

function App() {
  const [isLoggedin, setLoggedIn] = useState('false');


  const loginHandler = (islogin) => {
    localStorage.setItem('login', islogin)
    setLoggedIn(islogin);
    
  }
  
  return (
    <div className='app'>
      <Header isLoggedin={loginHandler}></Header>
      <Routes>
        <Route  index element={<Body></Body>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='login' element={<Login isLoggedin={loginHandler}/>}></Route>
        <Route path='orders' element={<MyOrder/>}></Route>
        <Route path='hotels' element={<NameHolder/>}></Route>
        <Route path='hotels/:hotelId' element={<Hotel/>}></Route>
      </Routes>
      <Footer/>
      
    </div>

  )
}


export default App;
