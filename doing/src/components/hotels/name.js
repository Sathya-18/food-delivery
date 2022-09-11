import React, {useState} from 'react';
import './name.css';


function Create(Props){

    const [like, setLike] = useState("disliked");

    const btnHandle = ()=>{
        if(like=="disliked"){
            setLike("liked")
        }else{
            setLike("disliked")
        }
    }
    

    return(
        <div className='container-name'>
            <div className='image'>
                <img src={Props.image}/>
            </div>
            <div className='boxx'>
                <div>
                <h3>{Props.name}</h3>
                <p>{Props.food}</p>
                <p>{Props.rating}</p>
                </div>
                
                <p onClick={btnHandle} className={like}>&#10084;</p>
            </div>
            
        </div>
    )
}

export default Create;
