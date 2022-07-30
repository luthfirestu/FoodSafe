import React from 'react'
import './Login.css'

function Login() {
  return (
    <div>
        <h1>Login</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <div className='rounded'>
            <div className='Login'>
                <form>
                    <input className='loginform' type="text" name="email" placeholder='username'/>
                </form>
                <form>
                    <input className='loginform' type="password" name="password" placeholder='password'/>
                </form>
                <button>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login