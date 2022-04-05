import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MainLogo from "../images/logo3.jpg";
import Lock from "../svg/Lock.svg";
import ShoppingCart from "../svg/ShoppingCart.svg";
import User from "../svg/User.svg";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
const Logo = () => {
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(userActions.logOutFB());
    window.alert("로그아웃 하시겠습니까?");
    window.location.reload("");
  };
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
          {!localStorage.getItem("token") && (
            <Link to="/login">
              <p style={{ marginRight: "10px", display: "flex" }}>LOGIN</p>
            </Link>
          )}

          {localStorage.getItem("token") && (
            <button
              style={{
                marginRight: "10px",
                display: "flex",
                border: "0px",
                outline: "0px",
              }}
              onClick={() => {
                signOut();
              }}
            >
              LOGOUT
            </button>
          )}
          <img style={{ marginRight: "10px" }} src={ShoppingCart} alt="logo3" />

          <Link to="/cartpage">
            <p style={{ marginRight: "10px", display: "flex" }}>LIKE</p>
          </Link>

          <img style={{ marginRight: "10px" }} src={User} alt="logo3" />
          <Link to="/signup">
            <p style={{ width: "100px", display: "flex" }}>SIGN UP</p>
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
