import React, {useState} from 'react';
import './name.css';


function Create(Props){

    const [like, setLike] = useState("liked");

    const btnHandle = ()=>{
        if(like=="liked"){
            setLike("disliked")
        }else{
            setLike("liked")
        }
    }
    

    return(
        <div className='container-name'>
            <div className='image'>
                <img src={Props.image}/>
            </div>
            <div className='box'>
                <h3>{Props.name}</h3>
                <p>{Props.food}</p>
                <p>{Props.rating}</p>
                <p onClick={btnHandle} className={like}>&#10084;</p>
            </div>
            
        </div>
    )
}

export default Create;
