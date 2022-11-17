import React, { useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Navbar from './Pages/Navbar';
import OrdersDetails from './Pages/OrdersDetails';
import CostmerDetails from './Pages/CostmerDetails';
import PrintPage from './components/PrintPage';
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
      <>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:id" element={<Menu/>} />
        <Route path="/orders" element={<OrdersDetails/>} />
        <Route path="*" element={<Home/>} />
        {/* <Route path="/print" element={<PrintPage/>} /> */}
        <Route path="/costmer-details" element={<CostmerDetails/>} />
        </Routes>
      </>
  );
}

export default App;
