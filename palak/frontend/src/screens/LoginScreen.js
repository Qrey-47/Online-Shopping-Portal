import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoginScreen = () => {
  // State for the login form
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // State for the register form
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const [error, setError] = useState('');
  const [userInfo, setUserInfo] = useState(null);

  // Check if user is already logged in
  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/users/login', {
        email: loginEmail,
        password: loginPassword,
      });
      localStorage.setItem('userInfo', JSON.stringify(data));
      setUserInfo(data);
      setError('');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/users/register', {
        name: registerName,
        email: registerEmail,
        password: registerPassword,
      });
      localStorage.setItem('userInfo', JSON.stringify(data));
      setUserInfo(data);
      setError('');
    } catch (err) {
      setError('User already exists or invalid data');
    }
  };
  
  const handleLogout = () => {
      localStorage.removeItem('userInfo');
      setUserInfo(null);
  }

  if (userInfo) {
    return (
        <div>
            <h2>Welcome, {userInfo.name}!</h2>
            <p>You are logged in.</p>
            <button className="btn" onClick={handleLogout}>Logout</button>
        </div>
    )
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {/* Login Form */}
      <div style={{ width: '45%' }}>
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn">
            Sign In
          </button>
        </form>
      </div>

      {/* Register Form */}
      <div style={{ width: '45%' }}>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter name"
              value={registerName}
              onChange={(e) => setRegisterName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;