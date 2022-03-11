import React from "react";
import styled from "styled-components";

import "../App.css";

import logo_design from "../design/스프링워치-로고2.png";
const NavbarButtonBlock = styled.div`
  .nav-link {
    color: white;
  }
  .sticky {
    position: sticky;
    top: 0;
  }
  .logo {
    /* background-image: url(${logo_design});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 10px; */

    color: white;
    width: 100px;
    height: 60px;
    cursor: pointer;
  }
  * {
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
  }
  body {
    font-family: montserrat;
  }
  nav {
    background: #2b334d;
    height: 80px;
    width: 100%;
  }
  label.logo {
    color: white;
    font-size: 30px;
    line-height: 30px;

    font-weight: bold;
    margin-left: 100px;
    margin-top: 10px;
  }
  nav ul {
    color: white;
    float: right;
    margin-right: 20px;
  }
  nav ul li {
    display: inline-block;
    line-height: 80px;
    margin: 0 5px;
  }

  li {
    :hover {
      opacity: 0.5;
    }
  }
`;

function NavbarButton() {
  return (
    <NavbarButtonBlock>
      <nav>
        <label className="logo">
          SPRING <span style={{ marginLeft: "23px" }}>WATCH</span>
        </label>
        <ul>
          <li className="active" style={{ color: "#c9bda0" }}>
            WATCH
          </li>
          <li style={{ color: "#c9bda0" }}>STYLE</li>
          <li>LOGIN</li>
          <li>CART</li>
          <li>MY PAGE</li>
        </ul>
      </nav>
    </NavbarButtonBlock>
  );
}

export default NavbarButton;
