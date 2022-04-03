import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MainLogo from "../images/logo3.jpg";
import Lock from "../svg/Lock.svg";
import ShoppingCart from "../svg/ShoppingCart.svg";
import User from "../svg/User.svg";

const Logo = () => {
  return (
    <div>
      <LogoBlock>
        <div className="logo">
          <Link to="/">
            <img src={MainLogo} alt="logo3" />
          </Link>
        </div>
        <div className="flex-item">
          <img style={{ marginRight: "10px" }} src={Lock} alt="logo3" />
          <Link to="/login">
            <p>LOGIN</p>
          </Link>
          <img style={{ marginRight: "10px" }} src={ShoppingCart} alt="logo3" />
          <Link to="/cartpage">
            <p>CART</p>
          </Link>
          <img style={{ marginRight: "10px" }} src={User} alt="logo3" />
          <Link to="/signup">
            <p>SIGN UP</p>
          </Link>
        </div>
      </LogoBlock>
    </div>
  );
};
const LogoBlock = styled.div`
  display: flex;
  justify-content: center;

  .logo {
    margin-left: 43em;
  }
  .flex-item {
    display: flex;
    padding: 40px;
    margin-left: 20em;
  }
`;
export default Logo;
