import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className='home-main'>
            <h1>Welcome to 
               <br /> Meme My Day</h1>
            <h2>Find and save your favourtie viral memes</h2>
            <Link to="/login"> <button> Login</button></Link>
          
        </div>
    )
}

 export default HomePage