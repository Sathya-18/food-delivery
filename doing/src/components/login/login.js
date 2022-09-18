import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import styles from './login.module.css'

function Login(props) {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setValid] = useState(false);

    const login = (e) => {
        e.preventDefault();
        localStorage.setItem('login', 'true')
        props.isLoggedin('true');
        navigate('/orders');
    }

    useEffect(() => {

        if ((email.includes('@') && password.length > 4)) {
            setValid(true);
        }

    }, [email, password]);

    useEffect(() => {
        return () => console.log('unmounted');
    }, []);


    const emailHandler = (int) => {
        setEmail(int.target.value)
    }
    const passwordHandler = (int) => {
        setPassword(int.target.value)
    }


    return (
        <div className={styles.container}>
            <div className={styles.bgImage}></div>

        <form onSubmit={login} className={styles.login}>
            <input type="email" placeholder="Enter email" onChange={emailHandler} value={email} /><br></br>
            <input type="password" placeholder="Enter password" onChange={passwordHandler} value={password} /><br></br>
            {isValid ? <button type="submit" className={styles.submit1} >Submit</button> : <button type="submit" className={styles.submit2} disabled>Submit</button>}
            
        </form>
        </div>
    );
}

export default Login;



// import {Component} from 'react';

// class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: "",
//             password: "",
//             isValid: ""
//         };
//         this.emailHandler= this.emailHandler.bind(this);
//     }

//     login(e) {
//         e.preventDefault();
//         localStorage.setItem('login', 'true')
//         this.props.isLoggedin('true');
//     }


//     componentDidUpdate(previousProps, previousState) {
//         console.log('updated')
//         if (previousState.isValid !== true) {
//             if ((this.state.email.includes('@') && this.state.password.length > 4)) {
//                 this.setState((previouseState) => {
//                     return { ...previouseState, isValid: true }
//                 })
//             }
//         }


//     }

//     emailHandler(e) {
//         this.setState((previouseState) => {
//             return { ...previouseState, email: e.target.value }
//         })
//     }
//     passwordHandler(e) {
//         this.setState((previouseState) => {
//             return { ...previouseState, password: e.target.value }
//         })
//     }

//     render() {
//         return (

//             <form onSubmit={this.login.bind(this)} className="fo" >
//                 <input type="email" placeholder="Enter email" onChange={this.emailHandler} value={this.state.email} />
//                 <input type="password" placeholder="Enter password" onChange={this.passwordHandler.bind(this)} value={this.state.password} />
//                 {this.state.isValid ? <button type="submit" className='submit1'>Submit</button> : <button type="submit" className='submit2' disabled>Submit</button>}
//             </form>

//         );
//     }
// }