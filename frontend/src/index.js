import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from './Component/Begin/Homepage'
import Customer from './Component/Begin/Customer';
import Welcome from './Component/Begin/Welcome';
import Login from './Component/Begin/Login';
import Signup from './Component/Begin/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
/*  <BrowserRouter>
      <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="login" element={<Login/>} />
          <Route path="signUp" element={<Signup/>} />
          <Route path="homepage" element={<Homepage/>}/>
          <Route path="profile" element={<Customer/>} />
      </Routes>
</BrowserRouter> */
  <React.StrictMode>
    <Customer/>
  </React.StrictMode>
);
