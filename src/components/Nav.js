import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";

function Nav({ currentPage, handlePageChange }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            href="#about"
            className="mt-5"
            onClick={() => handlePageChange("About")}
          >
            About Me
          </Nav.Link>
          <Nav.Link
            href="#contact"
            className="mt-5"
            onClick={() => handlePageChange("Contact")}
          >
            Contact
          </Nav.Link>
          <Nav.Link
            href="#resume"
            className="mt-5"
            onClick={() => handlePageChange("Resume")}
          >
            Resume
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default Nav;
