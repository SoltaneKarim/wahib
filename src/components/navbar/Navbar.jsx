import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo">
          <h1>zortrax</h1>
          <div className="navbar-divider"></div>
          <p>Global 3D Printers Manufacturer</p>
        </div>
        <div className="navbar-links">
          <a href="#find-reseller">Find Reseller</a>
          <button className="navbar-button">Online Store</button>
        </div>
      </div>
      <div className="navbar-bottom">
        <a href="#products">Products</a>
        <a href="#applications">Applications</a>
        <a href="#software">Software</a>
        <a href="#incloud">InCloud</a>
        <a href="#support-service">Support & Service</a>
        <a href="#3d-printing-services">3D Printing Services</a>
      </div>
    </div>
  );
};

export default Navbar;