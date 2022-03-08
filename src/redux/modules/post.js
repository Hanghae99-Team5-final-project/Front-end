import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import apis from "../../api/apis";
import moment from "moment";
import { useSSRSafeId } from "@react-aria/ssr";

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
  createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
  modifiedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
};

const getPostFB = () => {
  return async function (dispatch, getState, { history }) {
    await apis
      .getPost()
      .then((res) => {
        console.log(res.data);
        dispatch(getPost(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const addPostFB = (contents = "") => {
  return async function (dispatch, getState, { history }) {
    const _user = getState().user.user;

    const user_info = {
      user_name: _user.user_name,
      user_id: _user.uid,
      user_profile: _user.user_profile,
    };

    const _post = {
      ...initialPost,
      contents: contents,
      modifiedAt: moment().format("YYYY-MM-DD hh:mm:ss"),
    };
    const _userId_data = { ...(contents = "") };
    console.log(_userId_data);
    await apis
      .addPost({ ...user_info, ..._post })
      .then((res) => {
        console.log(res.data);
        dispatch(addPost({ userId: res.data.userId, ..._userId_data }));
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
