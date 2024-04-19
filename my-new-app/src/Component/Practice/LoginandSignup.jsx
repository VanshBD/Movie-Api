import React, { useState } from 'react';

const UserLoginSignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Check if user exists in local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.username === username && parsedUser.password === password) {
        setIsLoggedIn(true);
        alert('Login successful!');
      } else {
        alert('Invalid username or password.');
      }
    } else {
      alert('User not found. Please register.');
    }
  };

  const handleRegister = () => {
    // Save user data to local storage
    localStorage.setItem('user', JSON.stringify({ username, password, email }));
    alert('Registration successful! You can now login.');
    setIsLoginMode(true); // Switch to login mode after successful registration
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <div className="container mt-5">
      {isLoggedIn ? (
        <div>
          <h1 className="display-4 text-center">Thank you for logging in, {username}!</h1>
          <button className="btn btn-primary d-block mx-auto mt-3" onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <div>
          {isLoginMode ? (
            <div className='m-auto w-25'>
              <h2 className="h4 text-center">Login</h2>
              <input type="text" className="form-control mb-3" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              <input type="password" className="form-control mb-3" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button className="btn btn-primary btn-block" onClick={handleLogin}>Login</button>
              <p className="text-center mt-3">Don't have an account? <button className="btn btn-link p-0" onClick={toggleMode}>Sign Up</button></p>
            </div>
          ) : (
            <div className='m-auto w-25'>
              <h2 className="h4 text-center">Register</h2>
              <input type="text" className="form-control mb-3" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              <input type="email" className="form-control mb-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="password" className="form-control mb-3" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button className="btn btn-success btn-block" onClick={handleRegister}>Register</button>
              <p className="text-center mt-3">Already have an account? <button className="btn btn-link p-0" onClick={toggleMode}>Login</button></p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserLoginSignup;
