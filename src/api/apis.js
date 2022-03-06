import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3003",
  headers: {
    "content-type": "application/json;charset=UTF-8", // 자바스크립트는 json형태로 받아와야 한다.
    accept: "application/json",
  },
});

const token = localStorage.getItem("token");

instance.interceptors.request.use(function (config) {
  const accessToken = localStorage.token;
  config.headers.common["Authorization"] = `Bearer ${accessToken}`; // header에 토큰값을 넣는다 => header에 토큰값이 있어 앞으로 request를 자유자재로 할 수 있다.
  return config;
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
