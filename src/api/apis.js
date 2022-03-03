import axios from "axios";
const USER_TOKEN = sessionStorage.getItem("X-AUTH-TOKEN");

const instance = axios.create({
  baseURL: "http://localhost:3003/",
});

export const apis = {
  signUp: (userInfo) => instance.post("signup", userInfo),
};
export default apis;
