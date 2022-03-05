import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import "../App.css";
function NavbarButton() {
  return (
    <Navbar className="container" variant="dark" bg="dark" expand="">
      <Container>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="item">
              <Nav.Link href="#home">신상</Nav.Link>
              <Nav.Link href="#link">베스트</Nav.Link>
              <Nav.Link href="#link">오늘출발</Nav.Link>
              <Nav.Link href="#link">득템찬스</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarButton;
