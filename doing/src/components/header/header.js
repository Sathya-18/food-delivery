import './header.css'
import logo from '../../assets/logo.png';
import  {Link, useNavigate} from "react-router-dom";


function Header(props){

  const navigate = useNavigate();

  const logout = () => {
    props.isLoggedin("false")
    navigate('/')
}


    return(
    <header>
        <div className='container'>
          <div className='header-wrapper'>
            <img src={logo}></img>
            <nav>
              <Link to="about">About</Link>
              {localStorage.getItem('login') == "true" ? <button onClick={logout}>Log out</button> :[<Link to='login' key={"loginkey"}>Login</Link>, <Link to='signup' key={"logoutkey"}>Sign up</Link>]}
              
            </nav>
          </div>
        </div>
      </header>
    )
};

export default Header;