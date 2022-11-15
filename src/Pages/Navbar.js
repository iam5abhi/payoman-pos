import React from 'react';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-success flex-md-nowrap p-0 shadow">
        <NavLink className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">Logo</NavLink>
        <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
            <NavLink className="nav-link" to="/">Logout</NavLink>
            </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;
