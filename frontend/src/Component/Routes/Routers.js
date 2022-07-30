import React from 'react'
import {BrowserRouter} from "react-router-dom"
import { Route, Routes} from "react-router";
import Homepage from '../App/Homepage'
import Customer from '../App/Customer'
import Welcome from '../Begin/Welcome'
import Login from '../Begin/Login';
import Signup from '../Begin/Signup';

const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Welcome/>} />
        </Routes>
        <Routes>
            <Route path='Home' element={<Homepage/>} />
        </Routes>
        <Routes>
            <Route path='Profile' element={<Customer/>} />
        </Routes>
        <Routes>
            <Route path='Login' element={<Login/>} />
        </Routes>
        <Routes>
            <Route path='SignUp' element={<Signup/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routers