import './main.css';

import Footer from '../footer/footer';
import Body from '../body/body';
import Header from '../header/header';

import {Routes, Route} from "react-router-dom";


function Main() {

  
  return (
    <div className='main'>
      <Header></Header>
      <Routes>
        <Route  index element={<Body></Body>}></Route>
      </Routes>
      <Footer/>
    </div>

  )
}


export default Main;
