import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import "../App.css";
import { Link } from "react-router-dom";

const Login = (props) => {
  const dispatch = useDispatch();
  const [username, setId] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = () => {
    if (username === "" || password === "") {
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
      return;
    }

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
              <input
                type="text"
                placeholder="아이디를 입력해주세요."
                value={username}
                onChange={(e) => {
                  setId(e.target.value);
                  console.log(e.target.value);
                  setId(e.target.value);
                }}
              />
            </div>
            <div className="input-wrap">
              <label className="input-title">비밀번호</label>
              <input
                type="password"
                value={password}
                placeholder="패스워드 입력해주세요."
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="btn-wrap">
              <button
                type="button"
                className="long-btn"
                onClick={() => {
                  console.log("로그인 했어!");
                  login();
                }}
              >
                로그인
              </button>

              <button type="button" className="long-btn">
                <Link to="/signup">회원가입</Link>
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
