import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import apis from "../../api/apis";
import moment from "moment";

import axios from "axios";

const GET_POST = "GET_POST";
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const getPost = createAction(GET_POST, (post_list) => ({ post_list }));

const initialState = {
  list: [],
};

const initialPost = {
  //   title: "",
  //   contents: "",
  //   username: "",
  //   personCnt: "",
  //   watchTitle: "",
  //   joinUntil: "",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdOk4yqQXMe8PN7IZNSiySsODjAVU4viQnnw&usqp=CAU",
  contents: "",
  // createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
  // modifiedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
};

const getPostFB = () => {
  return function (dispatch, getState, { history }) {
    axios
      .get("http://3.35.167.81:8080/api/cody")
      .then((res) => {
        console.log(res.data);
        dispatch(getPost(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const addPostFB = (
  userId,
  codyTitle,
  watchBrand,
  watchModel,
  codyContent,
  star
) => {
  return function (dispatch, getState, { history }) {
    axios
      .post("http://3.35.167.81:8080/api/cody", {
        userId: 1234,
        codyTitle: "제목",
        watchBrand: "문페이즈",
        watchModel: "G-shock250",
        codyContent: "16억개",
        imageUrl: "사진",
        star: 5,
      })

      .then((res) => {
        console.log(res.data);
        dispatch(addPost({ userId: res.data.userId }));
        history.replace("/");
      })
      .catch((err) => {
        window.alert("포스트 작성에 문제가 있어요!");
        console.log("포스트 작성실패", err);
      });
  };
};
///리듀서
export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.post_list = action.payload.post_list;
      }),

    [SET_POST]: (state, action) => produce(state, (draft) => {}),

    [ADD_POST]: (state, aciton) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  getPost,
  getPostFB,
  addPostFB,
};

export { actionCreators };
