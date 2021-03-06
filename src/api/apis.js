import axios from "axios";

const instance = axios.create({
  baseURL: "https://choisw.shop",
  headers: {
    "content-type": "application/json;charset=UTF-8", // 자바스크립트는 json형태로 받아와야 한다.
    accept: "application/json",
  },
});

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.common["Authorization"] = `${token}`; // header에 토큰값을 넣는다 => header에 토큰값이 있어 앞으로 request를 자유자재로 할 수 있다.
  return config;
});

export const apis = {
  //---- 유저  ----//
  kakao: (authorization_code) =>
    instance.get(`/user/kakao/callback?code=${authorization_code}`), //카카오로그인
  signUp: (id, password, email) =>
    instance.post("/user/signup", id, password, email),
  Login: (userInfo) => instance.post("/user/login", userInfo),

  UpdateEmail: (email) =>
    instance.put("/api/user/change", {
      email: email,
    }),

  // ------좋아요 -------
  LikeButton: (likesId) => instance.post(`/api/like/create/${likesId}`),

  //----- 조회 -----//
  mainPage: () => instance.get("/main"),
  categoryPage: () => instance.get("/api/watch/category"),
  watchDetailPage: (watchId) => instance.get(`/api/detail/${watchId}`),
  cartPage: () => instance.get("/api/user/like"),
  getPostapi: () => instance.get("/api/cody"),
  getPostComment: (watchId) => instance.get(`/api/detail/${watchId}`),
  getcodyPostComment: (codyId) => instance.get(`/api/detail/${codyId}`),
  // -----상세페이지 조회-----
  detailPage: (watchId) => instance.get(`/api/detail/${watchId}`),
  detailButtonPage: (watchId) => instance.get(`/api/like/${watchId}`),
  sendLike: (watchId) => instance.post(`/api/like/create/${watchId}`),
  deleteLike: (likesId) => instance.delete(`/api/like/delete/${likesId}`),
  // codyDetail: () => instance.get("/api/cody"),
  codymainPage: () => instance.get("/api/cody?page=0&size=5"),
  codyDetailPage: (codyId) => instance.get(`/api/cody/detail/${codyId}`),
  //  -------포스트-----

  deletePost: (codyId) => instance.delete(`/api/cody/${codyId}`),
  // ----- 댓글 ------///

  getComment: (watchId) => instance.get(`/watch/${watchId}`),

  addCommentCody: (commentUser, commentContent, codyId, createdAt) =>
    instance.post(`/comment/write/cody/${codyId}`, {
      commentContent: commentContent,
    }),

  addCommentWatch: (
    commentUser,
    commentContent,
    watchId,
    createdAt,
    commentId
  ) =>
    instance.post(`/comment/write/watch/${watchId}`, {
      commentUser: commentUser,
      commentContent: commentContent,
      commentId: commentId,
      createdAt: createdAt,
    }),

  // ------수정-------
  UpdateComment: (commentId, watchId, commentContent) =>
    instance.put(`/comment/update/${commentId}`, {
      commentContent: commentContent,
    }),

  deleteComment: (commentId) => instance.delete(`/comment/delete/${commentId}`),
};

export default apis;
