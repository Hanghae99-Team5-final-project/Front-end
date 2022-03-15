import React from "react";
import { Text, Input, Button } from "../elements";
import styled from "styled-components";

import Kakaologin from "../components/Kakaologin";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { deleteCookie, getCookie, setCookie } from "../Cookie";
const LoginWrap = styled.div`
  max-width: 1200px;
  margin: auto;
  text-align: center;
  transition: 0.5s;
`;
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
      <Kakaologin />
      <LoginWrap>
        <Text size="32px" bold>
          로그인
        </Text>

        <Input
          label="아이디"
          placeholder="아이디를 입력해주세요."
          value={username}
          type="text"
          _onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <Input
          label="패스워드"
          value={password}
          placeholder="패스워드 입력해주세요."
          type="password"
          _onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button
          text="로그인하기"
          _onClick={() => {
            login();
          }}
        ></Button>
      </LoginWrap>
    </React.Fragment>
  );
};

export default Login;
