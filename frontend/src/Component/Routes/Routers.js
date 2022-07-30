import React from 'react'
import {BrowserRouter} from "react-router-dom"
import { Route, Routes} from "react-router";
import Homepage from '../Begin/Homepage';
import Customer from '../Begin/Customer';
import Welcome from '../Begin/Welcome'
import Login from '../Begin/Login';
import Signup from '../Begin/Signup';
import Pricecalc from '../Begin/Pricecalc';
import Merch from '../Begin/Merch';
import Home from '../Begin/Home';
import Profile from '../Begin/Profile';

const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Welcome/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signUp' element={<Signup/>} />
            <Route path='/pricecalc' element={<Pricecalc/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/merch' element={<Merch/>} />
            <Route path='/home' element={<Home/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routers
