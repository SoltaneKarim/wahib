import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container d-flex align-items-center justify-content-between">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src="/src/assets/logo-no-background.png" alt="ZORTREX" width="100" height="26" />
            <div className="vertical-bar"></div>
            <p className="text-body-secondary mb-0 ms-2" style={{ fontSize: '15px' }}>Global 3D Printers <br /> Manufacturer</p>
          </a>
          <div className="d-flex align-items-center">
            <button type="button" className="btn" data-bs-toggle="button">Find Reseller</button>
            <button type="button" className="btn btn-primary active" data-bs-toggle="button" aria-pressed="true">Online Store</button>
          </div>
        </div>
      </nav>
      <hr className="hr1" />
      <div>
        <ul className="nav justify-content-center fw-medium ">
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