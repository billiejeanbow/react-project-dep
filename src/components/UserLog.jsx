import { useState } from "react";
import{ useNavigate } from 'react-router-dom'

function UserLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  const navigate = useNavigate()
    const handleLogin = () => {
      if (username && password) {
        navigate("/Players")
      ;
      }else {
        alert("Please enter both a username and a password.");}
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
          <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default UserLogin;
