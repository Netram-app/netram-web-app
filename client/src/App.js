import React from 'react'
import './App.css';

import {BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Navbar from './component/navbar'
import Home from './component/home'
import Service from './component/service'
import Footer from './component/footer'
import Contact from './component/contact';
import Bolg from './component/blog';
import Donate from './component/donate';
import Doctor from './component/doctor';





function App() {

  return (

    <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Service" element={<Service />} />
      <Route exact path="/Contact" element={<Contact />} />
      <Route exact path="/blog" element={<Bolg/>} />
      <Route exact path="/donate" element={<Donate/>} />
      <Route exact path="/doctor" element={<Doctor/>} />
    </Routes>
    <Footer/>
</Router>

  );
}

export default App;
