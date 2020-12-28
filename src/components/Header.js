import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-dark-grey">
      <Navbar.Brand href="#home" className="txt-grey">
        .::::::::: Student Information System :::::::::.
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav mr-sm-2">
        <Nav className="mr-auto">
          <Nav.Link href="#home" className="txt-grey">
            Student List
          </Nav.Link>
          <Nav.Link href="#link" className="txt-grey">
            Create New Student
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
