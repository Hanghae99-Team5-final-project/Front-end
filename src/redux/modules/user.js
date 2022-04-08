import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

import apis from "../../api/apis";

const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";

const logOut = createAction(LOG_OUT, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

const initialState = {
  user: null,
  is_login: false,
};

// middleware actions
const loginFB = (username, password) => {
  return async function (dispatch, getState, { history }) {
    try {
      const res = await apis.Login(username, password, {
        username: username,
        password: password,
      });

      if (res.headers.authorization) {
        localStorage.setItem("token", res.headers.authorization);
        console.log(res.headers.authorization);
      }
      dispatch(setUser(res.data));
      console.log(res.data);
      window.alert(` 환영합니다!`);
      history.replace("/");
      window.location.reload("");
    } catch (err) {
      alert("아이디 또는 비밀번호가 일치하지 않습니다!");
      console.log(err.response);
    }
  };
};

const loginCheckFB = () => {
  return function (dispatch, getState, { history }) {
    console.log("도착");
    const token = localStorage.getItem("token");
    axios({
      method: "get",
      url: "https://choisw.shop/check/user",
      headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
        Authorization: `${token}`,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.check) {
          dispatch(
            setUser({
              userId: res.data.userId,
              username: res.data.username,
              email: res.data.email,
            })
          );
        } else {
          dispatch(logOutFB());
        }
      })
      .catch((err) => {
        console.log("로그인 확인 실패", err);
      });
  };
};

const logOutFB = () => {
  return function (dispatch, getState, { history }) {
    localStorage.removeItem("token");
    dispatch(logOut());
  };
};

const signupFB = (id, password, email) => {
  return async function (dispatch, getState, { history }) {
    try {
      const res = await apis.signUp({
        username: id,
        password: password,
        email: email,
      });
      if (res) {
        window.alert("회원가입이 완료 되었습니다.");
      } else {
        window.alert("");
      }
      history.push("/login");
      return;
    } catch (error) {
      console.log(error);
    }
  };
};

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),

    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  logOut,
  logOutFB,
  loginFB,
  signupFB,
  setUser,

  loginCheckFB,
};

export { actionCreators };
