import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './name.css';

function Create(Props){

    const [like, setLike] = useState("disliked");

    const btnHandle = ()=>{
        if(like=="disliked"){
            if(localStorage.getItem('login') == 'true'){
                setLike("liked")
            }else{
                alert('Please Login to like')
            }
        }else{
            setLike("disliked")
        }
        
    }
    const navigt = useNavigate();

    const view = ()=>{
        navigt('/hotels/'+Props.Id)
    }
    

    return(
        <div className='container-name' >
            <div className='image'>
                <img src={Props.image}/>
            </div>
            <div className='boxx'>
                <div>
                <h3 onClick={view}>{Props.name}</h3>
                <p>{Props.food}</p>
                <p>{Props.rating}</p>
                </div>
                
                <p onClick={btnHandle} className={like}>&#10084;</p>
            </div>
            
        </div>
    )
}

export default Create;
