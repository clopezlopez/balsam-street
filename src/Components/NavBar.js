import React from 'react'
import { Link } from "react-scroll";
import worshiplogo from '../img/worship-logo.png'
// import Navbar  from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'

function NavBar () { 
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-4" id="main-nav">
      <div className="container">
        <a href="#home" className="navbar-brand">
          <img src={worshiplogo} alt="Logo" />
          <h3 className="d-inline align-middle">Balsam-Street Church</h3>
        </a>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">          
            <li className="nav-item">
              <Link  
              href="#home"
              to="home"
              activeClass="active"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={-140}>Home</Link>
            </li>
            <li className="nav-item">
              <Link href="#about"
              to="about"
              activeClass="active"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={-140}>About</Link>
            </li>
            <li className="nav-item">
              <Link href="#our-people"
              to="our-people"
              activeClass="active"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={-140}>Our People</Link>
            </li>
            <li className="nav-item">
              <Link 
              href="#find-us"
              to="find-us"
              activeClass="active"
              className="nav-link"
              spy={true}
              smooth={true}
              offset={-110}>Find Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}


export default NavBar;
