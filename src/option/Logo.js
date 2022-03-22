import React from "react";
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
          <img src={MainLogo} alt="logo3" />
        </div>
        <div className="flex-item">
          <img style={{ marginRight: "10px" }} src={Lock} alt="logo3" />
          <p>LOGIN</p>
          <img style={{ marginRight: "10px" }} src={ShoppingCart} alt="logo3" />
          <p>CART</p>
          <img style={{ marginRight: "10px" }} src={User} alt="logo3" />
          <p>MY PAGE</p>
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
