import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(){
  return (
    <nav id="navbar">
      <div className="nav-item">
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/about" activeClassName="active">About</NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/projects" activeClassName="active">Projects</NavLink>
      </div>
    </nav>
  )
}

export default Nav;
