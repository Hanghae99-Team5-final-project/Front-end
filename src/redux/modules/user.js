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

// action creators
// const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

const token = localStorage.getItem("token");
// initialState
const initialState = {
  user: null,
  is_login: false,
};

// middleware actions
const loginFB = (username, password) => {
  return async function (dispatch, getState, { history }) {
    await apis
      .Login(username, password, {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
        if (res.headers.authorization) {
          localStorage.setItem("token", res.headers.authorization);
          console.log(res.headers.authorization);
        }

        dispatch(setUser(res.data));

        history.replace("/");
      })
      .catch((err) => {
        alert(err.response);
        console.log(err.response);
      });
  };
};

// const loginCheckFB = () => {
//   const token = localStorage.getItem("token");
//   return function (dispatch, getState, { history }) {
//     axios({
//       method: "get",
//       url: "http://3.35.167.81:8080/user/login",
//       headers: {
//         "content-type": "application/json;charset=UTF-8",
//         accept: "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => {
//         console.log(res);

//         dispatch(
//           setUser({
//             userId: res.data.username,
//           })
//         );
//       })
//       .catch((err) => {
//         console.log("로그인 확인 실패", err);
//       });
//   };
// };

const logOutFB = () => {
  return function (dispatch, getState, { history }) {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    dispatch(logOut());
    history.replace("/");
  };
};
// const loginAction = (user) => {
//   return function (dispatch, getState, { history }) {
//     console.log(history);
//     dispatch(logIn(user));
//     history.push("/");
//   };
// };

const signupFB = (id, password, email) => {
  return async function (dispatch, getState, { history }) {
    axios
      .post("http://3.35.167.81:8080/user/signup", {
        username: id,
        password: password,
        email: email,
      })

      .then((res) => {
        window.alert(res.data);
        history.push("/login");
        return;
      })
      .catch((error) => {
        console.log(error);
      });
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
  // loginCheckFB,
};

export { actionCreators };
