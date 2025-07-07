import React from "react";
import {Link, NavLink} from 'react-router-dom'
import '../App.css';

const NavBar = () => {
  return (
    <div id="text">
      <ul>
        <li>
          <NavLink to="/" className={({isActive}) => isActive ? "active-link" : ""}> Home </NavLink>
        </li>

        <li>
          <NavLink to="/about" className={({isActive}) => isActive ? "active-link" : ""}> About </NavLink>
        </li>

        <li>
          <NavLink to="/dashboard" className={({isActive}) => isActive ? "active-link" : ""}> Dashboard </NavLink>
        </li>

        <li>
          <NavLink to="/student" className={({isActive}) => isActive ? "active-link" : ""}> ParamComp </NavLink>
        </li>
      </ul>

    </div>
  );
};

export default NavBar;
