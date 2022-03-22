import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.34.2.113:8080",
  headers: {
    "content-type": "application/json;charset=UTF-8", // 자바스크립트는 json형태로 받아와야 한다.
    accept: "application/json",
  },
});

const token = localStorage.getItem("token");

instance.interceptors.request.use(function (config) {
  config.headers.common["authorization"] = `${token}`; // header에 토큰값을 넣는다 => header에 토큰값이 있어 앞으로 request를 자유자재로 할 수 있다.
  return config;
});

export const apis = {
  //---- 유저  ----//
  kakao: (authorization_code) =>
    instance.get(`/user/kakao/callback?code=${authorization_code}`), //카카오로그인
  signUp: (id, password, email) =>
    instance.post("/user/signup", id, password, email),
  Login: (userInfo) => instance.post("/user/login", userInfo),
  // IdCheck: (idInfo) => instance.post("/api/user/redunancy", idInfo),

  // ------좋아요 -------
  LikeButton: (watchId) => instance.post(`/api/like/create/${watchId}`),

  //----- 조회 -----//
  mainPage: () => instance.get("/main"),
  categoryPage: () => instance.get("/api/watch/category"),
  cartPage: () => instance.get("/api/user/like"),
  // getPostapi: () => instance.get("/api/cody"),

  // -----상세페이지 조회-----
  detailPage: (watchId) => instance.get(`/api/detail/${watchId}`),
  detailButtonPage: (watchId) => instance.get(`/api/detail/like/${watchId}`),
  codyDetail: () => instance.get("/api/cody"),
  //  -------포스트-----
  addPost: (userId, codyTitle, watchBrand, watchModel, codyContent, star) =>
    instance.post("/api/cody", {
      userId: userId,
      codyTitle: codyTitle,
      watchBrand: watchBrand,
      watchModel: watchModel,
      codyContent: codyContent,
      star: star,
    }),
  //----- 댓글 ------///
  // getComment: (userId) => instance.get(`api/detail/${userId}`),

  addCommentCody: (commentUser, commentContent, codyId, createdAt) =>
    instance.post(`/comment/write/cody/${codyId}`, {
      commentContent: commentContent,
    }),

  addCommentWatch: (commentUser, commentContent, watchId, createdAt) =>
    instance.post(`/comment/write/watch/${watchId}`, {
      commentContent: commentContent,
    }),
  deleteComment: (commentId) => instance.delete(`/comment/delete/${commentId}`),
};

export default apis;
