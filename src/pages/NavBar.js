import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
            <Container>
          <Navbar.Brand as={Link} to ="/"> ACC² </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/upload">
              Validate
            </Nav.Link>
            <Nav.Link as={Link} to="/legislation">
              Rulebook.ttl
            </Nav.Link>
          </Nav>
          </Container>
        </Navbar>
        
      </div>
    );
  }
}

export default NavBar;
