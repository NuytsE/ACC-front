import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
            <Container>
          <Navbar.Brand> ACC² </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/upload">
              Upload
            </Nav.Link>
            <Nav.Link as={Link} to="/report">
              Report
            </Nav.Link>
            <Nav.Link as={Link} to="/legislation">
              Legislation
            </Nav.Link>
          </Nav>
          </Container>
        </Navbar>
        
      </div>
    );
  }
}

export default NavBar;
