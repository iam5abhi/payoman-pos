import React, { useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Navbar from './Pages/Navbar';
import Orders from './Pages/Orders';
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
      <>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:id" element={<Menu/>} />
        <Route path="/orders" element={<Orders/>} />
        </Routes>
      </>
  );
}

export default App;
