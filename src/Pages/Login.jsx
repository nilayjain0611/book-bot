import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'SUPERUSER' && password === 'USER@123') {
      // Navigate to the dashboard on successful login
      navigate("/Dashboard");
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
      <h1 className="welcome-heading">CAMPUS LIBRARY </h1>
      <div className="login-container">
        <div className="image-container"></div>
        <div className="form-container">
          <h2>Welcome to login!</h2>
          <form onSubmit={handleLogin}>
            <input 
              type="text" 
              placeholder="Username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <input type="submit" value="Login" />
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
