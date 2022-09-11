import './App.css';

// import Footer from './components/footer/footer';
// import Body from './components/body/body';
// import Header from './components/header/header';
// import About from './components/about/about'

import {Routes, Route} from "react-router-dom";
import Main from './components/main/main'
import About from './components/about/about'


function App() {

  
  return (
    <div className='app'>
      <Routes>
        <Route  index element={<Main></Main>}></Route>
        <Route path='about' element={<About/>}></Route>
      </Routes>
     
    </div>

  )
}


export default App;
