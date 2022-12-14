import React from 'react';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-success navbar-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Navbar</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/orders">Orders</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/customer-details">Customer</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/">Logout</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
