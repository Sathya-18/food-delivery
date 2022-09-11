import './header.css'
import logo from '../../assets/logo.png';
import  {Link} from "react-router-dom";

function Header(){
//   const logout1 = () => {
//     // props.logout(false)
//     console.log('logout');
// }

    return(
    <header>
        <div className='container'>
          <div className='header-wrapper'>
            <img src={logo}></img>
            <nav>
              <Link to="about">About</Link>
              {/* <Link to='/'>Logout</Link> */}
            </nav>
          </div>
        </div>
      </header>
    )
};

export default Header;