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

const addPost = createAction(ADD_POST, (post) => ({ post }));
const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
const like = createAction(LIKE, (like) => ({
  like,
}));
const likeId = createAction(LIKE_ID, (likeId) => ({ likeId }));

const token = localStorage.getItem("token");

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
    try {
      const response = await apis.getPostComment(watchId);
      console.log(response.data);
      dispatch(getPost(response.data));
      dispatch(commentActions.getComment(response.data.commentResponseDtoList));
    } catch (err) {
      console.log(err.response);
    }
  };
};

const addPostFB = (title, brand, model, content, files, Value) => {
  return async (dispatch, getState, { history }) => {
    console.log(files);
    let formData = new FormData();

    formData.append("codyTitle", title);
    formData.append("watchBrand", brand);
    formData.append("watchModel", model);
    formData.append("codyContent", content);
    formData.append("multipartFile", files);
    formData.append("star", Value);
    console.log(formData);
    axios
      .post(
        "http://52.79.228.154:8080/api/cody",
        formData,

        {
          headers: {
            Authorization: token,
            "content-type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        dispatch(addPost(res.data));
      });
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
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post;
      }),
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
