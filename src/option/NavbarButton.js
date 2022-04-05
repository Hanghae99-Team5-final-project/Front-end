import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import logo01 from "../images/logo01.png";

import "../App.css";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch, useSelector } from "react-redux";

function NavbarButton() {
  const dispatch = useDispatch();

  let isLogin = useSelector((state) => state.user.is_login);
  console.log(isLogin);

  const signOut = () => {
    dispatch(userActions.logOut());
  };

  return (
    <Navbar>
      <img src={logo01} alt="logo01" className="logo-img img1" />
      <img src={logo01} alt="logo01" className="logo-img img2" />

      <nav>
        <div className="nav-wrap">
          <ul className="title-wrap">
            <NavLink
              to="/watchpage"
              activeStyle={{ color: "red", textDecoration: "underline" }}
            >
              WATCH
            </NavLink>
            <NavLink
              to="/watchcodymainpage"
              activeStyle={{ color: "red", textDecoration: "underline" }}
            >
              STYLE
            </NavLink>
          </ul>
        </div>
      </nav>
    </Navbar>
  );
}
export default NavbarButton;

const Navbar = styled.div`
  .Main-logo {
    position: flex;
    justify-content: center;

    width: 235px;
    height: 100px;
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
      transform: rotate(-360deg);
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
      transform: rotate(-360deg);
    }
  }

  nav {
    background: #2b334d;
    width: 100%;
    /* position: fixed;
    top: 0;
    z-index: 99; */

    .nav-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      height: 80px;
      position: relative;
      width: 100%;

      .hamburger {
        position: absolute;
        left: 0;
      }

      .title-wrap {
        display: flex;
        align-items: center;
        padding: 0;
        margin: 0;
        position: absolute;

        > a {
          padding: 15%;
          color: #fff;

          &:hover {
            text-decoration: underline;
          }

          .menu {
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
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
