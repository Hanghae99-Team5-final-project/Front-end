import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

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
 
  nav {
    background: #2b334d;
    width: 100%;

    .nav-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      height: 80px;
      position: relative;
      width: 100%;
      max-width: 1200px;


      .title-wrap {
        display: flex;
        align-items: center;
        padding: 0;
        margin: 0;
        position: absolute;
        right: 100px;

        > li {
          padding: 3%;
          color: #fff;
          list-style: none;
        }
      }
    }
  }


  label.logo {
    color: white;
    font-size: 30px;
    line-height: 1;

    font-weight: bold;
  }
  @media (min-width: 992px) {
  .nav-link {
  }
  .sticky {
  }
  .logo {
  }

  nav {
  }
  label.logo {
  }
  nav ul {
  }
  nav ul li {
  }

  li {
    }
  }
  }
`;

function NavbarButton() {
  return (
    <NavbarButtonBlock>
      <nav>
        <div className="nav-wrap">
          <label className="logo">
            SPRING <span style={{ marginLeft: "23px" }}>WATCH</span>
          </label>
          <ul className="title-wrap">
            <li>WATCH</li>
            <li>STYLE</li>
            <li>LOGIN</li>
            <li>CART</li>
            <li>MY PAGE</li>
            <li>
              <GiHamburgerMenu />
            </li>
          </ul>
        </div>
      </nav>
    </NavbarButtonBlock>
  );
}

export default NavbarButton;
