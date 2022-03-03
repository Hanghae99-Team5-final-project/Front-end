import React from "react";
import styled from "styled-components";

import { Grid, Text, Button } from "../elements";
import { history } from "../redux/configStore";

const Header = (props) => {
  return (
    <HeaderWrap>
      <Text
        _onClick={() => {
          history.replace("/");
        }}
        size="32px"
        bold
      >
        스프링워치
      </Text>
      <ButtonWrap>
        <p
          text-size="16px"
          _onClick={() => {
            history.replace("/login");
          }}
        >
          로그인/회원가입
        </p>
        <p
          text-size="16px"
          _onClick={() => {
            history.replace("/signup");
          }}
        >
          찜한 상품
        </p>
        <p
          text-size="16px"
          _onClick={() => {
            history.replace("/signup");
          }}
        >
          마이페이지
        </p>
      </ButtonWrap>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-around;
`;

export default Header;
