import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from "axios";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate=useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add logic to submit the login data to your backend or handle it as needed
    axios.post('http://localhost:3001/login', { email, password })
    .then(result=>{
        console.log(result)
        if(result.data==="Success"){
            navigate('/home')
        }
        })
    .catch(err=> console.log(err))
    // You can also reset the form fields here if needed
    setEmail('');
    setPassword('');
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='form-control rounded-0'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='form-control rounded-0'
            />
          </div>
          <button type="submit" className='btn btn-primary w-100 rounded-0'>Login</button>
        </form>
        <p>Don't have an account?</p>
        <Link to='/signup' className='btn btn-default border w-100 bg-light rounded-0'>Signup</Link>
      </div>
    </div>
  );
}

export default Login;