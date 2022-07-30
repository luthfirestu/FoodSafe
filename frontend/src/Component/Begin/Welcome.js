import React from 'react'
import './Welcome.css'
import { Button } from 'react-bootstrap';
import Login from './Login';
import Signup from './Signup';
import { Navigate } from 'react-router-dom';
import {Routes, Route, useNavigate} from 'react-router-dom';
function Welcome() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    // 👇️ navigate to /contacts
    navigate('/login');
  };

  const navigateToSignup = () => {
    // 👇️ navigate to /
    navigate('/signup');
  };

  return (
    <div className='welcomepage'>
        <img src="https://drive.google.com/uc?view&id=1oSmAeaOCNYXQDj81bcFIm_YOJNYdVVb7" className='girl' alt="foto"></img>
        <h1 className='textwelcome'>Welcome,</h1>
        <p className='ppp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <div className='signlog'>
          <button onClick={navigateToSignup} className='SignupButton'>Sign Up</button>
          <button onClick={navigateToLogin} className='LoginButton'>Login</button>
          <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          </Routes>
            <br></br>
            <br></br>
        </div>
    </div>
  )
}

export default Welcome