import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import apis from "../../api/apis";
import axios from "axios";
import { actionCreators as commentActions } from "./comment";

const GET_POST = "GET_POST";
const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const EDIT_POST = "EDIT_POST";
const GET_CODYMAIN = "GET_CODYMAIN";
const GET_CODYDETAIL = "GET_CODYDETAIL";
const LIKE = "LIKE";
const LIKE_ID = "LIKE_ID";

const addPost = createAction(ADD_POST, (post) => ({ post }));
const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
const deletePost = createAction(DELETE_POST, (postId) => ({ postId }));
const editPost = createAction(EDIT_POST, (post, postId) => ({ post, postId }));
const getcodyPost = createAction(GET_POST, (post_list) => ({ post_list }));
const getCodyMain = createAction(GET_CODYMAIN, (codyMain) => ({
  codyMain,
}));
const getCodyDetail = createAction(GET_CODYDETAIL, (codyDetail) => ({
  codyDetail,
}));

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
  codyMain: null,
  codyDetail: null,
};

const getPostFB = (watchId) => {
  return async (dispatch) => {
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

const getCodyPostFB = (codyId) => {
  return async (dispatch) => {
    try {
      const response = await apis.getcodyPostComment(codyId);
      console.log(response.data);
      dispatch(getcodyPost(response.data));
      dispatch(
        commentActions.getcodyComment(response.data.commentResponseDtoList)
      );
    } catch (err) {
      console.log(err.response);
    }
  };
};

const getCodyMainFB = () => {
  console.log("도착1");
  return async (dispatch) => {
    try {
      console.log("도착2");
      const res = await apis.codymainPage();
      console.log();
      const codyMain = res.data;
      console.log(codyMain);
      dispatch(getCodyMain(codyMain));
    } catch (err) {
      console.log(err);
    }
  };
};

const getCodyDetailFB = (codyId) => {
  console.log("도착1");
  return async (dispatch) => {
    try {
      console.log("도착2");
      const res = await apis.codyDetailPage(codyId);
      console.log();
      const doc = {
        userId: res.data.userId,
        userName: res.data.userName,
        watchModel: res.data.watchModel,
        codyTitle: res.data.codyTitle,
        imageUrl: res.data.imageUrl,
        codyContent: res.data.codyContent,
        watchBrand: res.data.watchBrand,
        star: res.data.star,
        createdAt: res.data.createdAt,
      };
      console.log();
      dispatch(getCodyDetail(doc));
      dispatch(commentActions.getComment(res.data.commentResponseDtoList));
    } catch (err) {
      console.log(err);
    }
  };
};

const addPostFB = (title, brand, model, content, files, Value) => {
  return async (dispatch, getState, { history }) => {
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
        "https://choisw.shop/api/cody",
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
        history.push("/watchcodymainpage");
      });
  };
};

const editPostDB = (title, brand, model, content, files, Value, codyId) => {
  return async (dispatch, getState, { history }) => {
    let formData = new FormData();

    formData.append("codyTitle", title);
    formData.append("watchBrand", brand);
    formData.append("watchModel", model);
    formData.append("codyContent", content);
    formData.append("multipartFile", files);
    formData.append("star", Value);
    console.log(formData);
    axios
      .put(
        `https://choisw.shop/api/cody/${codyId}`,
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
        dispatch(editPost(res.data, codyId));
        console.log(res.data);
        history.push("/watchcodymainpage");
      });
  };
};

const deletePostDB = (postId) => {
  return async function (dispatch, getState, { history }) {
    await apis.deletePost(postId).then((res) => {
      dispatch(deletePost(postId));
      console.log(res);
      history.replace("/watchcodymainpage");
    });
  };
};

const likePostFB = (watchId) => {
  console.log(watchId);
  return async (dispatch) => {
    dispatch(like(true));
    const response = await apis.sendLike(watchId);
    console.log(response);
    dispatch(getLike(watchId));
  };
};

const deleteDB = (data) => {
  return async (dispatch) => {
    dispatch(like(false));
    const response = await apis.deleteLike(data);
    console.log(response);
  };
};

const getDetail = (watchId) => {
  console.log(watchId);
  return async () => {
    const response = await apis.detailPage(watchId);
    console.log(response);
  };
};

const getLike = (watchId) => {
  return async (dispatch) => {
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
        draft.codyMain = [action.payload.post, ...draft.codyMain];
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.codyMain = draft.codyMain.map((a, i) => {
          if (a.codyId === action.payload.postId) {
            a = action.payload.post;
          }
          return a;
        });
      }),

    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.codyMain = draft.codyMain.filter(
          (c) => c.codyId !== action.payload.postId
        );
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
    [GET_CODYMAIN]: (state, action) =>
      produce(state, (draft) => {
        draft.codyMain = action.payload.codyMain;
      }),
    [GET_CODYDETAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.codyDetail = action.payload.codyDetail;
      }),
  },

  initialState
);

const actionCreators = {
  addPost,
  getPost,
  getPostFB,
  addPostFB,
  editPostDB,
  likePostFB,
  deleteDB,
  getDetail,
  like,
  likeId,
  getLike,
  deletePostDB,
  deletePost,
  editPost,
  getCodyPostFB,
  getCodyMainFB,
  getCodyDetailFB,
};

export { actionCreators };
