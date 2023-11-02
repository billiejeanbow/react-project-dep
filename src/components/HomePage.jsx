import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className='home-main'>
            <h1>Welcome to 
               <br />Got Hoops? </h1>
            <h2>Search for your favourite NBA players stats.</h2>
            <Link to="/login"> <button> Login</button></Link>
          
        </div>
    )
}

 export default HomePage