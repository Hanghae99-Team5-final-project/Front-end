import React from "react";
import styled from "styled-components";
import { getCookie, deleteCookie } from "../Cookie";
import { Grid, Text, Button } from "../elements";
import { history } from "../redux/configStore";

const Header = (props) => {
  const [is_login, setIsLogin] = React.useState(false);

  React.useEffect(() => {
    let cookie = getCookie("user_id");
    console.log(cookie);

    if (cookie) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  });

  if (is_login) {
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
          <button
            text-size="16px"
            _onClick={() => {
              history.replace("/login");
            }}
          >
            내정보
          </button>
          <button
            text-size="16px"
            _onClick={() => {
              history.replace("/signup");
            }}
          >
            알림
          </button>
          <button
            text-size="16px"
            _onClick={() => {
              {
                deleteCookie("user_id");
              }
            }}
          >
            로그아웃
          </button>
        </ButtonWrap>
      </HeaderWrap>
    );
  }

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
        <button
          text-size="16px"
          _onClick={() => {
            history.replace("/login");
          }}
        >
          로그인/회원가입
        </button>
        <button
          text-size="16px"
          _onClick={() => {
            history.replace("/signup");
          }}
        >
          찜한 상품
        </button>
        <button
          text-size="16px"
          _onClick={() => {
            history.replace("/signup");
          }}
        >
          마이페이지
        </button>
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
