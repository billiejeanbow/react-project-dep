import { useState } from "react";
import{ Link } from 'react-router-dom'

function UserLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLogin = () => {
      if (username && password) {
        setIsLoggedIn(true);
      }
    }
    return (
        <div className="login-main">
          <h2>Login</h2>
          <form>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <Link to={isLoggedIn ? "/FetchMemes" : "#"}> {/* Conditionally set the link */}
          <button onClick={handleLogin}>Login</button>
        </Link>
      </form>

      {isLoggedIn && (
        <p>
          Login successful!{' '}
          <Link to="./components/FetchMemes">Click here to access the latest memes</Link>
        </p>
      )}
    </div>
  );
}

export default UserLogin;
