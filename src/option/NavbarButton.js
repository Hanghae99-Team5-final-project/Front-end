import React from "react";
import styled from "styled-components";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import "../App.css";
const NavbarButtonBlock = styled.div`
  .nav-link {
    color: white;
  }
`;

function NavbarButton() {
  return (
    <NavbarButtonBlock>
      <Navbar className="container" variant="dark" bg="dark" expand="">
        <Container>
          <Navbar.Brand>비고</Navbar.Brand>
          <Navbar.Brand>비고</Navbar.Brand>
          <Navbar.Brand>시계 코디</Navbar.Brand>
          <div className="nav-link">
            <NavDropdown
              variant="dark"
              bg="dark"
              style={{
                fontSize: "22px",
                marginRight: "10px",
                padding: "10px 10px",
              }}
              title="시계"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">• 디지털</NavDropdown.Item>
              <NavDropdown.Item href="#action4">• 커플</NavDropdown.Item>
              <NavDropdown.Item href="#action5">• 스마트</NavDropdown.Item>
            </NavDropdown>
          </div>
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
    </NavbarButtonBlock>
  );
}

export default NavbarButton;
