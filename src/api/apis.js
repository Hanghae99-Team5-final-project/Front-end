import axios from "axios";
const USER_TOKEN = sessionStorage.getItem("X-AUTH-TOKEN");

const instance = axios.create({
  baseURL: "http://localhost:3003",
});

export const apis = {
  //---- 유저  ----//
  kakao: (authorization_code) =>
    instance.get(`/api/user/kakao/callback?code=${authorization_code}`), //카카오로그인
  signUp: (userInfo) => instance.post("/api/user/signup", userInfo),
  Login: (userInfo) => instance.post("/api/user/login", userInfo),
  IdCheck: (idInfo) => instance.post("/api/user/redunancy", idInfo),
};
export default apis;
