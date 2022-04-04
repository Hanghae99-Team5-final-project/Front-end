import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { setCookie, deleteCookie } from "../../Cookie";
import apis from "../../api/apis";
// actions
// const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const EDIT_EMAIL = "EDIT_EMAIL";

// action creators
// const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const editEmail = createAction(EDIT_EMAIL, (user) => ({ user }));

const token = localStorage.getItem("token");
// initialState
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
      history.replace("/");
    } catch (err) {
      alert(err.response);
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
      if (res.data) {
        alert("회원가입이 완료 되었습니다.");
      } else {
        alert("");
      }
      history.push("/login");
      return;
    } catch (error) {
      console.log(error);
    }
  };
};

const editEmailFB = (email) => {
  return async function (dispatch, getState, { history }) {
    try {
      const res = await apis.UpdateEmail({
        email: email,
      });
      const editEmail = res.data;
      console.log(editEmail);
      dispatch(editEmail(email));
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
    [EDIT_EMAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// action creator export
const actionCreators = {
  logOut,
  getUser,
  logOutFB,
  loginFB,
  signupFB,
  setUser,
  editEmail,
  editEmailFB,
  loginCheckFB,
};

export { actionCreators };
