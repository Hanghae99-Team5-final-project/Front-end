import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "../App.css";

// import logo_design from "../design/스프링워치-로고2.png";
const Navbar = styled.div`
  .follow {
  }
  .is-pc {
    display: none;
  }

  .is-mb {
    display: block;
  }

  nav {
    background: #2b334d;
    width: 100%;
    position: fixed;
    top: 0;

    .nav-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      height: 80px;
      position: relative;
      width: 100%;

      .logo {
        color: white;
        width: 100px;
        height: 60px;
        cursor: pointer;
        color: white;
        font-size: 30px;
        line-height: 1;
        font-weight: bold;
        position: absolute;
        left: 20px;
      }

      .title-wrap {
        display: flex;
        align-items: center;
        padding: 0;
        margin: 0;
        position: absolute;
        right: 20px;

        > li {
          padding: 3%;
          color: #fff;
          list-style: none;

          .menu {
          }
        }
      }
    }
  }
  .list {
    list-style: none;

    a:link {
      text-decoration: none;
    }
  }
  @media (min-width: 992px) {
    .is-pc {
      display: block;
    }

    .is-mb {
      display: none;
    }

    nav {
      .nav-wrap {
        max-width: 1000px;
        .logo {
        }
        .title-wrap {
          > li {
            padding: 20px;
          }
        }
      }
    }
  }

  @media (min-width: 1200px) {
    nav {
      .nav-wrap {
        max-width: 1200px;
        .logo {
        }
        .title-wrap {
          > li {
            padding: 30px;
          }
        }
      }
    }
  }
`;

function NavbarButton() {
  return (
    <Navbar className="follow">
      <nav className="is-mb">
        <div className="nav-wrap">
          <div className="logo">
            SPRING <br />
            <span style={{ marginLeft: "23px" }}>WATCH</span>
          </div>
          <ul className="title-wrap">
            <li>
              <GiHamburgerMenu size="30" />
            </li>
          </ul>
        </div>
      </nav>

      <nav className="is-pc">
        <div className="nav-wrap">
          <div className="logo">
            SPRING <br />
            <span style={{ marginLeft: "23px" }}>WATCH</span>
          </div>
          <ul className="title-wrap">
            <div className="list">
              <a href="watchpage">
                <li>WATCH</li>
              </a>
              <a href="watchcodymainpage">
                <li>STYLE</li>
              </a>
              <a href="login">
                <li>LOGIN</li>
              </a>
              <a href="cartpage">
                <li>CART</li>
              </a>
              <a href="mypage">
                <li>MY PAGE</li>
              </a>
            </div>
            <li>
              <GiHamburgerMenu size="30" />
            </li>
          </ul>
        </div>
      </nav>
    </Navbar>
  );
}

export default NavbarButton;
