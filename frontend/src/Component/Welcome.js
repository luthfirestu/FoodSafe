import React from 'react'
import '../App.css'
import { Button } from 'react-bootstrap';

function Welcome() {
  return (
    <div>
        <img src="https://drive.google.com/uc?view&id=1oSmAeaOCNYXQDj81bcFIm_YOJNYdVVb7" className='girl' alt="foto"></img>
        <h1 className='textwelcome'>Welcome,</h1>
        <p className='ppp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <div className='signlog'>
            <Button variant="primary">Sign Up</Button>{' '}
            <Button variant="primary">Login</Button>{' '}
        </div>
    </div>
  )
}

export default Welcome