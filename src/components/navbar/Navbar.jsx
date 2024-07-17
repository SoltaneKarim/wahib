import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container d-flex align-items-center justify-content-between">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="/src/assets/logo-no-background.png"
              alt="ZORTREX"
              width="100"
              height="26"
            />
            <div className="vertical-bar"></div> {/* Added vertical bar */}
            <span className="ml-2">Global 3D Printers Manufacturer</span>
          </a>
          <div className="d-flex">
          <button type="button" class="btn" data-bs-toggle="button">Toggle button</button>
            <button type="button" class="btn btn-primary active" data-bs-toggle="button" aria-pressed="true">Online Store</button>
          </div>
        </div>
      </nav>
      <hr /> {/* Increased width to 30% */}
      <div>
        <ul className="nav justify-content-center fw-medium">
          <li className="nav-item">
            <a className="nav-link link-dark" aria-current="page" href="#">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-dark" href="#">
              Applications
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-dark" href="#">
              Software
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-dark" href="#">
              Supports & Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-dark" href="#">
              3D printing services
            </a>
          </li>
        </ul>
        
      </div>
    </div>
  );
};

export default Navbar;