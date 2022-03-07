import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import apis from "../../api/apis";

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
  title: "",
  contents: "",
  username: "",
  personCnt: "",
  watchTitle: "",
  joinUntil: "",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdOk4yqQXMe8PN7IZNSiySsODjAVU4viQnnw&usqp=CAU",
  createdAt: "",
  modifiedAt: "2022-03-01",
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
};

export { actionCreators };
