import React, { useState } from "react";
import styled from "styled-components";

import { idCheck, emailCheck, pwdCheck } from "../common";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import axios from "axios";
import "../App.css";

const Signup = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [password_check, setPasswordCheck] = useState("");
  const [email, setEmail] = useState("");
  const [idDup, setidDup] = useState(false);
  const dispatch = useDispatch();
  const checkId = (id) => {
    axios
      .post("http://3.35.220.13:8080/user/redunancy", {
        username: id,
      })
      .then((res) => {
        if (res.data) {
          setidDup(true);
          alert("사용가능한 아이디 입니다.");
        } else {
          alert("이미 사용중인 아이디 입니다.");
        }
      })
      .catch((err) => {
        alert(err.response.data.errorMessage);
      });
  };

  const signup = () => {
    if (id === "" || password === "" || email === "") {
      window.alert("아이디, 패스워드 , 닉네임을 모두 입력해주세요!");
      return;
    }
    if (!idCheck(id)) {
      window.alert("아이디 형식이 맞지 않습니다!");
      return;
    }
    if (idDup === false) {
      alert("아이디 중복확인을 해주세요.");
      return false;
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
    <div className="wrap">
      <div className="center">
        <SignupWrap>
          <div className="title">SIGN UP</div>
          <div className="description">
            <span className="top">Spring Watch에 오신것을 환영합니다. </span>
            <span>
              회원가입하신 후 Spring Watch의다양한 서비스를 이용해보세요.
            </span>
          </div>
          <div className="input-wrap">
            <span>*</span>
            <label className="input-title">아이디</label>
            <input
              type="text"
              onChange={(e) => {
                setId(e.target.value);
              }}
              placeholder=""
              value={id}
            />
          </div>
          <button
            className="checkid"
            onClick={() => {
              if (!idCheck(id)) {
                alert("영문 숫자만 가능합니다.");
                return false;
              }
              checkId(id);
            }}
          >
            중복 확인
          </button>

          <div className="input-wrap">
            <span>*</span>
            <label className="input-title">비밀번호</label>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder=""
              value={password}
            />
          </div>
          <div className="input-wrap">
            <span>*</span>
            <label className="input-title">비밀번호 확인</label>
            <input
              type="password"
              onChange={(e) => {
                setPasswordCheck(e.target.value);
              }}
              placeholder=""
              value={password_check}
            />
          </div>
          <div className="input-wrap">
            <span>*</span>
            <label className="input-title">이메일</label>
            <input
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder=""
              value={email}
            />
          </div>

          <div className="btn-wrap">
            <button
              className="long-btn"
              type="button"
              onClick={() => {
                signup();
              }}
            >
              회원가입
            </button>
          </div>
        </SignupWrap>
      </div>
    </div>
  );
};

export default Signup;

const SignupWrap = styled.div`
  margin: auto;
  max-width: 70rem;
  padding: 3rem;

  .title {
    text-align: center;
    font-size: 3rem;
    color: #353535;
    margin-top: 12rem;
    margin-bottom: 5rem;
  }

  .description {
    margin: 9rem 0;
    .top {
      font-size: 2rem;
      font-weight: bold;
      padding-bottom: 2rem;
    }

    span {
      font-size: 1.8rem;
    }
  }

  .input-wrap {
    display: flex;
    align-items: center;
    height: 11rem;

    span {
      color: #ff0000;
      margin-right: 3rem;
    }

    .input-title {
      width: 10rem;
      margin: 0;
    }
  }

  .btn-wrap {
    margin-top: 4rem;
  }

  @media (min-width: 992px) {
    .lm-media {
      width: 80%;
    }
  }
  .flex-box {
    /* display: flex; */
  }
  .checkid {
    width: 150px;
    background-color: lightgreen;
  }
`;
