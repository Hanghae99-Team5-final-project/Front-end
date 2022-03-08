import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.35.167.81:8080",
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
  signUp: (userInfo) => instance.post("/user/signup", userInfo),
  Login: (userInfo) => instance.post("/api/user/login", userInfo),
  IdCheck: (idInfo) => instance.post("/api/user/redunancy", idInfo),

  //----- 조회 -----//
  getPost: () => instance.get("/api/cody"),

  //----- 댓글 ------///
  // getComment: (userId) => instance.get(`api/detail/${userId}`),

  addComment: (commentUser, commentContent, commentId, createdAt) =>
    instance.post(`/comment/write/${commentId}`, {
      commentUser: commentUser,
      commentContent: commentContent,
      commentId: commentId,
      createdAt: createdAt,
    }),
  deleteComment: (commentId) => instance.delete(`/comment/delete/${commentId}`),
};

export default apis;
