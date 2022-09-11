import {Link} from "react-router-dom";

function About(){
    return(
        <div className="container">
            <h1>ABOUT DOING</h1>
            <p>Providing food delivery with quality foods</p>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default About;