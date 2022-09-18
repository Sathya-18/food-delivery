import './header.css'
import logo from '../../assets/logo.png';
import  {Link} from "react-router-dom";


function Header(props){


  const logout = () => {
    props.isLoggedin("false")
}


    return(
    <header>
        <div className='container'>
          <div className='header-wrapper'>
            <Link to="/"><img src={logo}></img></Link>
            <nav>
              <Link to="about"><p>About</p></Link>
              {localStorage.getItem('login') == "true" ? <Link to='/' onClick={logout}><p>Log out</p></Link> :[<Link to='login' key={"loginkey"}><p>Login</p></Link>, <Link to='signup' key={"logoutkey"}><p>Sign up</p></Link>]}
              
            </nav>
          </div>
        </div>
      </header>
    )
};

export default Header;