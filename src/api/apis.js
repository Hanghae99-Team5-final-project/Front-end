import axios from "axios";
const USER_TOKEN = sessionStorage.getItem("X-AUTH-TOKEN");

const instance = axios.create({
  baseURL: "http://localhost:3003/",
});

export const apis = {
  /////유저///////
  signUp: (userInfo) => instance.post("signup", userInfo),
  Login: (userInfo) => instance.post("login", userInfo),
};
export default apis;
