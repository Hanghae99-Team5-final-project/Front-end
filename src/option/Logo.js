import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MainLogo from "../images/logo3.jpg";
import Lock from "../svg/Lock.svg";
import ShoppingCart from "../svg/ShoppingCart.svg";
import User from "../svg/User.svg";
import "../App.css";

const Logo = () => {
  return (
    <div className="wrap">
      <div className="center">
        <LogoBlock>
          <img src={MainLogo} alt="logoImg" className="logo" />
          <div className="btn-wrap">
            <Link to="/login">
              <img src={Lock} alt="loginImg" />
              <button type="button">LOGIN</button>
            </Link>
            <Link to="/login">
              <img src={ShoppingCart} alt="loginImg" />
              <button type="button">CART</button>
            </Link>
            <Link to="/login">
              <img src={User} alt="loginImg" />
              <button type="button">SIGN UP</button>
            </Link>
          </div>
        </LogoBlock>
      </div>
    </div>
  );
};
const LogoBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 10rem;

  .btn-wrap {
    position: absolute;
    display: flex;
    align-items: center;
    right: 2rem;
    a {
      width: 6rem;
      height: 4rem;
      text-align: center;
      img {
        margin: auto;
      }

      button {
        border: transparent;
        font-size: 1.4rem;
      }
    }
  }

  @media (max-width: 768px) {
    .logo {
      position: absolute;
      left: -10%;
    }
  }
`;

export default Logo;
