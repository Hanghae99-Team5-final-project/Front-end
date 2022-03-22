import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import apis from "../../api/apis";
import axios from "axios";
import { actionCreators as commentActions } from "./comment";
const GET_POST = "GET_POST";
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const LIKE = "LIKE";
const LIKE_ID = "LIKE_ID";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
const like = createAction(LIKE, (like) => ({
  like,
}));
const likeId = createAction(LIKE_ID, (likeId) => ({ likeId }));

const initialState = {
  postdetail: {},
  likes: [],
  like: false,
  likeId: 0,
  post: {
    likes: null,
    result: {},
  },
};

const getPostFB = (watchId) => {
  return async (dispatch, getState, { history }) => {
    const response = await axios.get(
      `http://3.34.2.113:8080/api/detail/${watchId}`
    );
    console.log(response.data);
    dispatch(getPost(response.data));
    dispatch(commentActions.getComment(response.data.commentResponseDtoList));
  };
};

const addPostFB = (codyTitle, watchBrand, watchModel, codyContent, star) => {
  return async (dispatch, getState, { history }) => {
    const response = await apis.post(
      codyTitle,
      watchBrand,
      watchModel,
      codyContent,
      star
    );
    console.log(response);
  };
};

const likePostFB = (watchId) => {
  return async (dispatch, getstate, { history }) => {
    dispatch(like(true));
    const response = await apis.sendLike(watchId);
    console.log(response);
    dispatch(getLike(watchId));
  };
};

const deleteDB = (data) => {
  return async (dispatch, getstate, { history }) => {
    dispatch(like(false));
    const response = await apis.deleteLike(data);
    console.log(response);
  };
};

const getDetail = (watchId) => {
  return async (dispatch, getstate, { history }) => {
    const response = await apis.detailPage(watchId);
    console.log(response);
  };
};

const getLike = (watchId) => {
  return async (dispatch, getstate, { history }) => {
    const response = await apis.detailButtonPage(watchId);
    console.log(response);

    dispatch(like(response.data.existLikes));
    dispatch(likeId(response.data.likeId));
  };
};

///리듀서
export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.postdetail = action.payload.post_list;
      }),

    [SET_POST]: (state, action) => produce(state, (draft) => {}),

    [ADD_POST]: (state, aciton) => produce(state, (draft) => {}),
    [LIKE]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        draft.like = action.payload.like;
      }),
    [LIKE_ID]: (state, action) =>
      produce(state, (draft) => {
        console.log("change)");
        draft.likeId = action.payload.likeId;
      }),
  },

  initialState
);

const actionCreators = {
  setPost,
  addPost,
  getPost,
  getPostFB,
  addPostFB,
  likePostFB,
  deleteDB,
  getDetail,
  like,
  likeId,
  getLike,
};

export { actionCreators };
