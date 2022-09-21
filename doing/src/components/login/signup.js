import { useEffect, useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import styles from './signup.module.css';

function Signup(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [valid, setValid] = useState('');

    const signup = (event)=>{
        event.preventDefault();
        navigate('/login');
    }

    useEffect(()=>{
        if(email.includes('@') && email.includes('.') && password1.length >4 && password2.length >4 && password1 === password2){
            setValid(true)
        }
    }, [email,password1,password2]);

    const handleEmail = (input) =>{
        setEmail(input.target.value)
    }

    const handlePw1 = (input) => {
        setPassword1(input.target.value)
    }

    const handlePw2 = (input) => {
        setPassword2(input.target.value)
    }

    return(
        <div className={styles.container}>
            <div className={styles.bgImage}></div>
            <div className={styles.form}>
            <form onSubmit={signup} className={styles.signup}>
            <input type='email' placeholder="Enter email id" onChange={handleEmail} value={email}></input>
            <input type='password' placeholder="Type password" onChange={handlePw1} value={password1}></input>
            <input type='password' placeholder="Re-type password" onChange={handlePw2} value={password2}></input>
            {valid ? <button type='submit' className={styles.submit1}>Submit</button> : <button type='submit' className={styles.submit2} disabled>Submit</button>}
            </form>
            <p>Already have an account? <span><Link to='/login'>Login</Link></span></p>
            </div>
        </div>
    )
}

export default Signup;