import React, { useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Navbar from './Pages/Navbar';
import OrdersDetails from './Pages/OrdersDetails';
import CustomerDetails from './Pages/CustomerDetails';
import PrintPage from './components/PrintPage';
import {Route,Routes,Navigate} from 'react-router-dom'

function App() {
  return (
      <>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:id" element={<Menu/>} />
        <Route path="/orders" element={<OrdersDetails/>} />
        <Route path='/*' element={ < Navigate to="/" />} />
        {/* <Route path="/print" element={<PrintPage/>} /> */}
        <Route path="/customer-details" element={<CustomerDetails/>} />
        </Routes>
      </>
  );
}

export default App;
