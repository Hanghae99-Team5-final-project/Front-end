import React, { Component } from "react";
import Styled from "styled-components";
import { withRouter } from "react-router-dom";
import kakao_login from "../images.png";

const ButtonWrap = Styled.div`
    
  background-image: url(${kakao_login});
  background-repeat: no-repeat;
  background-position : center;
  background-size: cover;
  border-radius: 10px;
  margin: 38px auto;
  color: transparent;
  width: 300px;
  height: 60px;
 cursor: pointer;
  
`;

const { Kakao } = window;

class KakaoLogin extends Component {
  state = {
    isLogin: false,
  };
  loginWithKakao = () => {
    try {
      return new Promise((resolve, reject) => {
        if (!Kakao) {
          reject("인스턴스 없음");
        }
        Kakao.Auth.login({
          success: (res) => {
            localStorage.setItem("token", res.token);
            this.setState({
              isLogin: true,
            });
            this.props.history.push("/api/user/kakao/callback");
          },
          fail: (err) => {
            console.error(err);
          },
        });
      });
    } catch (err) {
      console.error(err);
    }
  };
  componentDidMount() {
    if (Kakao.Auth.getAccessToken()) {
      this.setState({
        isLogin: true,
      });
    }
  }
  render() {
    const { isLogin } = this.state;
    const loginView = <ButtonWrap onClick={this.loginWithKakao}></ButtonWrap>;

    return <div className="App">{loginView}</div>;
  }
}

export default withRouter(KakaoLogin);
