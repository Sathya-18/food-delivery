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
import Orders from './components/foodOrders/orderDetails';
import Signup from './components/login/signup';
import { MyContext } from './context';

function App() {
  const [isLoggedin, setLoggedIn] = useState('false');


  const loginHandler = (islogin) => {
    localStorage.setItem('login', islogin)
    setLoggedIn(islogin);
    
  }
  
  return (
    <div className='app'>
    <MyContext.Provider value={{isLoggedin, setLoggedIn, loginHandler}}>
      <Header></Header>
      <Routes>
        <Route  index element={<Body></Body>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='signup' element={<Signup/>}></Route>
        <Route path='myorder' element={<MyOrder/>}></Route>
        <Route path='myorder/:orderid' element={<Orders/>}></Route>
        <Route path='hotels' element={<NameHolder/>}></Route>
        <Route path='hotels/:hotelId' element={<Hotel/>}></Route>
      </Routes>
      <Footer/>
      </MyContext.Provider>
    </div>

  )
}


export default App;
