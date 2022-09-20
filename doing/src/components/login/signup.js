import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(){
    const navigate = useNavigate()
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
        <div>
            <form onSubmit={signup}>
            <input type='email' placeholder="Enter email id" onChange={handleEmail} value={email}></input>
            <input type='password' placeholder="Type password" onChange={handlePw1} value={password1}></input>
            <input type='password' placeholder="Re-type password" onChange={handlePw2} value={password2}></input>
            {valid ? <button type='submit'>Submit</button> : <button type='submit' disabled>Submit</button>}
            </form>
        </div>
    )
}

export default Signup;