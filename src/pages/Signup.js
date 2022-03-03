import React, { useState } from "react";
import styled from "styled-components";
import UserInput from "../components/UserInput";
import { Text, Button } from "../elements";

const Signup = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [password_check, setPasswordCheck] = useState("");
  const [email, setEmail] = useState("");

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
        placeholder=""
        value={password}
      />

      <Text margin="0px 0px 8px 0px ">비밀번호 확인</Text>
      <UserInput
        _onChange={(e) => {
          setPasswordCheck(e.target.value);
        }}
        placeholder=""
        value={password_check}
      />

      <Text margin="0px 0px 8px 0px ">이메일 확인</Text>
      <UserInput
        _onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder=""
        value={email}
      />

      <Button margin-top="30px" onClick={() => {}}>
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
