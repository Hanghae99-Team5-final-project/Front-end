import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import apis from "../../api/apis";
// actions
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// action creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

// middleware actions
const loginFB = (id, password) => {
  return async function (dispatch, getState, { history }) {
    const userInfo = {
      username: id,
      password: password,
    };

    await apis
      .Login(userInfo)
      .then((res) => {
        window.alert(res.data);
        history.push("/");
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// const loginAction = (user) => {
//   return function (dispatch, getState, { history }) {
//     console.log(history);
//     dispatch(setUser(user));
//     history.push("/");
//   };
// };

const signupFB = (id, password, email) => {
  return async function (dispatch, getState, { history }) {
    const userInfo = {
      username: id,
      password: password,
      email: email,
    };

    await apis
      .signUp(userInfo)
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
  // loginAction,
  loginFB,
  signupFB,
};

export { actionCreators };
