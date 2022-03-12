import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo01 from "../images/logo01.png";
import logo02 from "../images/logo02.png";
import "../App.css";

// import logo_design from "../design/스프링워치-로고2.png";

function NavbarButton() {
  return (
    <Navbar>
      <img src={logo01} alt="logo01" className="logo-img img1" />
      <img src={logo01} alt="logo01" className="logo-img img2" />
      <nav className="is-mb">
        <div className="nav-wrap">
          <div className="logo">
            <Link to="/">
              <img src={logo02} alt="logoImage" />
            </Link>
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
            <Link to="/">
              <img src={logo02} alt="logoImage" />
            </Link>
          </div>
          <ul className="title-wrap">
            <Link to="/watchpage">WATCH</Link>
            <Link to="/watchcodymainpage">STYLE</Link>
            <Link to="/login">LOGIN</Link>
            <Link to="/cartpage">CART</Link>
            <Link to="/mypage">MY PAGE</Link>
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

const Navbar = styled.div`
  .is-pc {
    display: none;
  }

  .is-mb {
    display: block;
  }

  .logo-img {
    position: fixed;
    z-index: -1;
    width: 200px;

    &.img1 {
      left: -50px;
      animation: img1 5s ease Infinite Alternate;
    }

    &.img2 {
      right: 0;
      animation: img2 5s ease-in Infinite Alternate;
    }
  }

  @keyframes img1 {
    0% {
      top: 0px;
      left: -50px;
    }
    50% {
      left: -30px;
    }
    to {
      top: 300px;
    }
  }

  @keyframes img2 {
    0% {
      bottom: 0px;
      right: -50px;
    }
    50% {
      right: -80px;
    }
    to {
      bottom: 300px;
    }
  }

  nav {
    background: #2b334d;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 99;

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

        img {
          width: 100%;
        }
      }

      .title-wrap {
        display: flex;
        align-items: center;
        padding: 0;
        margin: 0;
        position: absolute;
        right: 20px;

        > a {
          padding: 3%;
          color: #fff;

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

  @media (min-width: 768px) {
    .logo-img {
      width: 270px;
    }
  }

  @media (min-width: 992px) {
    .is-pc {
      display: block;
    }

    .is-mb {
      display: none;
    }

    .logo-img {
      width: 350px;
    }

    nav {
      .nav-wrap {
        max-width: 1000px;
        .logo {
        }
        .title-wrap {
          > a {
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
