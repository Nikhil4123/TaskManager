import { useState } from 'react';
import { NavLink } from 'react-router-dom';  
import { FaHome, FaTasks, FaCheckCircle, FaSpinner, FaListAlt, FaArchive, FaCog, FaUserCircle, FaBars } from 'react-icons/fa';
import './Navbar.scss';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleLinkClick = () => {
    setIsActive(false);
  };

  return (
    <nav className={`navbar ${isActive ? 'active' : ''}`}>
      <div className="navbar-logo">My Dashboard</div>

      <div className="navbar-hamburger" onClick={toggleMenu}>
        <FaBars className="hamburger-icon" />
      </div>

      <ul className="navbar-menu">
        <li>
          <NavLink to="/" className="menu-item" activeClassName="active-link" onClick={handleLinkClick}>
            <FaHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" className="menu-item" activeClassName="active-link" onClick={handleLinkClick}>
            <FaTasks /> Add Task
          </NavLink>
        </li>
        <li>
          <NavLink to="/completed" className="menu-item" activeClassName="active-link" onClick={handleLinkClick}>
            <FaCheckCircle /> Completed
          </NavLink>
        </li>
        <li>
          <NavLink to="/in-progress" className="menu-item" activeClassName="active-link" onClick={handleLinkClick}>
            <FaSpinner /> In Progress
          </NavLink>
        </li>
        <li>
          <NavLink to="/to-do" className="menu-item" activeClassName="active-link" onClick={handleLinkClick}>
            <FaListAlt /> To Do
          </NavLink>
        </li>
        <li>
          <NavLink to="/archived" className="menu-item" activeClassName="active-link" onClick={handleLinkClick}>
            <FaArchive /> Archived
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className="menu-item" activeClassName="active-link" onClick={handleLinkClick}>
            <FaCog /> Settings
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="menu-item" activeClassName="active-link" onClick={handleLinkClick}>
            <FaUserCircle /> Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
