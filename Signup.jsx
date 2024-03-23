import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add logic to submit the form data to your backend or handle it as needed
    axios.post('http://localhost:3001/register', { name, email, password })
    .then(result=>{console.log(result)
    navigate('/login')
    })
    .catch(err=>console.log(err))
    // You can also reset the form fields here if needed
    setName('');
    setEmail('');
    setPassword('');
  };


  

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className='form-control rounded-0'
        />
      </div>
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
      <button type="submit" className='btn btn-success w-100 rounded-0'>Register</button>
    </form>
    <p>Already have an account</p>
    <Link to='/login' className='btn btn-default border w-100 bg-light rounded-0'>Login</Link>
        </div>
    </div>
    
  );
}

export default Signup;