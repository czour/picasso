import React from 'react';
import './NavBar.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl,Button } from 'react-bootstrap';
import Img from './img/logo.png'


function NavBar() {
  return (

    <Navbar className="navbar-custom">
    <Navbar.Brand href="#home"><img
    src={Img}
    className="d-inline-block align-top logo-style"
    height="110"
    width="274"
    alt="logo"
    /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown title="Customer Service Center" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Products & Services</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Request An Estimate</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Place A New order</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Send A File</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.5">View A Proof</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.6">Document Library</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Resources" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Frequently Asked Questions</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Glossary of Terms</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Company Information" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Company Culture</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Our Staff</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Departments</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Equipment</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.5">Careers</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.6">Location & Hours</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link">Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

);
}

export default NavBar;
