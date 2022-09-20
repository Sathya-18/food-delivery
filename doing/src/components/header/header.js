import './header.css'
import logo from '../../assets/logo.png';
import  {Link} from "react-router-dom";
import { useContext } from 'react';
import { MyContext } from '../../context';


function Header(){

  const islogin = useContext(MyContext);

//   const logout = () => {
//     props.isLoggedin("false")
// }

const logout = ()=>{
  islogin.loginHandler('false')
}


    return(
    <header>
        <div className='container'>
          <div className='header-wrapper'>
            <Link to="/"><img src={logo} alt='logo'></img></Link>
            <nav>
              <Link to="about"><p>About</p></Link>
              {islogin.isLoggedin && localStorage.getItem('login') === "true" ? [ <Link to='/myorder' key={"order"}><p>My Orders</p></Link>, <Link to='/' onClick={logout} key={"logout"}><p>Log out</p></Link>] :[ <Link to='login' key={"loginkey"}><p>Login</p></Link>, <Link to='signup' key={"logoutkey"}><p>Sign up</p></Link>]}
              
            </nav>
          </div>
        </div>
      </header>
    )
};

export default Header;