import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import "../App.css";
function NavbarButton() {
  return (
    <Navbar className="container" variant="dark" bg="dark" expand="">
      <Container>
        <Navbar.Brand>비고</Navbar.Brand>
        <Navbar.Brand>비고</Navbar.Brand>
        <Navbar.Brand>시계 코디</Navbar.Brand>
        <Navbar.Brand style={{ marginRight: "10px", padding: "10px 10px" }}>
          시계
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="item">
              <Nav.Link>신상</Nav.Link>
              <Nav.Link>베스트</Nav.Link>
              <Nav.Link>오늘출발</Nav.Link>
              <Nav.Link>득템찬스</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarButton;
