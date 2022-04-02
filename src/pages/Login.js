import React from "react";
import { Text, Input, Button } from "../elements";
import styled from "styled-components";
import Kakaologin from "../components/Kakaologin";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { deleteCookie, getCookie, setCookie } from "../Cookie";
import "../App.css";

const Login = (props) => {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const login = () => {
    if (username === "" || password === "") {
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
      return;
    }
    // const username = "jaemin";
    // const password = "asdf1234";
    dispatch(userActions.loginFB({ username, password }));
  };
  return (
    <React.Fragment>
      <div className="wrap">
        <div className="center">
          <LoginWrap>
            <div className="title">LOGIN</div>
            <div className="input-wrap">
              <label className="input-title">아이디</label>
              <input type="text" />
            </div>
            <div className="input-wrap">
              <label className="input-title">비밀번호</label>
              <input type="password" />
            </div>

            <div className="btn-wrap">
              <button type="button" className="long-btn">
                로그인
              </button>
              <button type="button" className="long-btn">
                회원가입
              </button>
            </div>
          </LoginWrap>
        </div>
      </div>
    </React.Fragment>
  );
};

const LoginWrap = styled.div`
  max-width: 60rem;
  margin: auto;
  padding: 3rem;
  padding-bottom: 30rem;

  .title {
    text-align: center;
    font-size: 3rem;
    color: #353535;
    margin-top: 12rem;
    margin-bottom: 5rem;
  }

  .input-wrap {
    color: #353535;
    margin-bottom: 3rem;
  }

  .btn-wrap {
    padding-top: 3rem;
  }
`;

export default Login;
