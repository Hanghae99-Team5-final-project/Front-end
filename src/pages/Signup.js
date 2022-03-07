import React, { useState } from "react";
import styled from "styled-components";
import UserInput from "../components/UserInput";
import { Text, Button } from "../elements";
import { idCheck, emailCheck, pwdCheck } from "../common";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";

const Signup = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [password_check, setPasswordCheck] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const signup = () => {
    if (id === "" || password === "" || email === "") {
      window.alert("아이디, 패스워드 , 닉네임을 모두 입력해주세요!");
      return;
    }
    if (!idCheck(id)) {
      window.alert("아이디 형식이 맞지 않습니다!");
      return;
    }
    if (!emailCheck(email)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }
    if (!pwdCheck(password)) {
      window.alert("비밀번호 문자와 숫자 8자이상이 아닙니다!");
      return;
    }
    if (password !== password_check) {
      window.alert("패스워드와 패스와드 확인이 일치하지 않습니다!");
      return;
    }
    dispatch(userActions.signupFB(id, password, email));
  };
  return (
    <SignupWrap>
      <Text margin="0px 0px 8px 0px">아이디</Text>
      <UserInput
        _onChange={(e) => {
          setId(e.target.value);
        }}
        placeholder=""
        value={id}
      />
      <Text margin="0px 0px 8px 0px ">비밀번호</Text>
      <UserInput
        _onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder=""
        value={password}
      />

      <Text margin="0px 0px 8px 0px ">비밀번호 확인</Text>
      <UserInput
        _onChange={(e) => {
          setPasswordCheck(e.target.value);
        }}
        type="password"
        placeholder=""
        value={password_check}
      />

      <Text margin="0px 0px 8px 0px ">이메일 확인</Text>
      <UserInput
        margin="0px 0px 20px 0px"
        _onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder=""
        value={email}
      />

      <Button
        _onClick={() => {
          signup();
        }}
      >
        회원가입
      </Button>
    </SignupWrap>
  );
};

export default Signup;

const SignupWrap = styled.div`
  width: calc(100% - 520px);
  padding: 80px 40px;
  margin: 0 auto;
  text-align: center;
`;
