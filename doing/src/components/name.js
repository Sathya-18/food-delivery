import './name.css';

function Create(Props){
    return(
        <div className='container-name'>
            <div className='image'>
                <img src={Props.image}/>
            </div>
            <div className='box'>
                <h3>{Props.name}</h3>
                <p>{Props.food}</p>
                <p>{Props.rating}</p>
            </div>
        </div>
    )
}

export default Create;
