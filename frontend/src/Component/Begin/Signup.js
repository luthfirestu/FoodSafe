import React from 'react'
import './Login.css'

function Signup() {
  return (
    <div className='Signup'>
        <h1>Sign Up</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <div className='rounded' id='rounded-signup'></div>
            <div className='formsignup'>
                <form>
                    <label className='label'>Email</label>
                    <input className='loginform' id='signupform' type="text" name="email" placeholder='hiiseulgi@gmail.com'/>
                </form>
                <form>
                    <label className='label'>Username</label>
                    <input className='loginform' id='signupform' type="text" name="email" placeholder='hiiseulgi@gmail.com'/>
                </form>
                <form>
                    <label className='label'>Password</label>
                    <input className='loginform' id='signupform' type="password" name="password" placeholder='********'/>
                </form>
                <button>Login</button>
            </div>
    </div>
  )
}

export default Signup