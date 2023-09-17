import React from 'react';
import { NavLink } from 'react-router-dom';
import './VerticalNavBar.css'; // Import your CSS file for styling

const VerticalNavBar = () => {
  return (
    <nav className="vertical-nav">
      <ul>
        <li>
          <NavLink to="/home" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/RandomDiceRoller" activeClassName="active">
            RandomDiceRoller
          </NavLink>
        </li>
        <li>
          <NavLink to="/Who" activeClassName="active">
            Who
          </NavLink>
        </li>
        <li>
          <NavLink to="/What" activeClassName="active">
            What
          </NavLink>
        </li>
        <li>
          <NavLink to="/When" activeClassName="active">
            When
          </NavLink>
        </li>
        <li>
          <NavLink to="/Where" activeClassName="active">
            Where
          </NavLink>
        </li>
        <li>
          <NavLink to="/Why" activeClassName="active">
            Why
          </NavLink>
        </li>
        <li>
          <NavLink to="/How" activeClassName="active">
            How
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default VerticalNavBar;
