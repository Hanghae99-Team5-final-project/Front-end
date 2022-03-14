import React from "react";
import { Text, Input, Button } from "../elements";
import styled from "styled-components";

import Kakaologin from "../components/Kakaologin";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { deleteCookie, getCookie, setCookie } from "../Cookie";

const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const login = () => {
    if (id === "" || password === "") {
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
      return;
    }
    // const username = "jaemin";
    // const password = "asdf1234";
    dispatch(userActions.loginFB({ id, password }));
  };

  const Wrap = styled.div`
    max-width: 1200px;
    margin: auto;
    text-align: center;
    transition: 0.5s;
  `;

  return (
    <React.Fragment>
      <Kakaologin />
      <Wrap>
        <Text size="32px" bold>
          로그인
        </Text>

        <input
          label="아이디"
          placeholder="아이디를 입력해주세요."
          type="text"
          _onChange={(e) => {
            setId(e.target.value);
            console.log(e.target.value);
          }}
        />

        <input
          label="패스워드"
          placeholder="패스워드 입력해주세요."
          type="password"
          _onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button
          text="로그인하기"
          _onClick={() => {
            console.log("로그인 했어!");
            login();
          }}
        ></Button>
      </Wrap>
    </React.Fragment>
  );
};

export default Login;
