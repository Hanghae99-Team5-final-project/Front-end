import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../api/apis";
import moment from "moment";
const GET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

const LOADING = "LOADING";

const getComment = createAction(GET_COMMENT, (comments) => ({
  comments,
}));
const addComment = createAction(ADD_COMMENT, (comment_data) => ({
  comment_data,
}));

const deleteComment = createAction(DELETE_COMMENT, (commentId) => ({
  commentId,
}));

const initialState = {
  list: [],
};

const getCommentFB = (commentId) => {
  return async function (dispatch, getState, { history }) {
    await apis
      .getComment(commentId)
      .then((res) => {
        dispatch(getComment(res.data.comment));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const addCommentCodyFB = (
  commentUser,
  commentContent,
  commentId,
  createdAt
) => {
  console.log(commentId);
  return async function (dispatch, getState, { history }) {
    await apis
      .addCommentCody(commentUser, commentContent, commentId, createdAt)

      .then((res) => {
        dispatch(
          addComment({
            commentUser,
            commentContent,
            commentId: res.data.commentId,
            createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const addCommentWatchFB = (
  commentUser,
  commentContent,
  commentId,
  createdAt
) => {
  console.log(commentId);
  return async function (dispatch, getState, { history }) {
    await apis
      .addCommentWatch(commentUser, commentContent, commentId, createdAt)
      .then((res) => {
        dispatch(
          addComment({
            commentUser,
            commentContent,
            commentId: res.data.commentId,
            createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const deleteCommentFB = (commentId) => {
  return async function (dispatch, getState, { history }) {
    await apis.deleteComment(commentId).then((res) => {
      dispatch(deleteComment(commentId));
      console.log(res);
      // window.alert("삭제가 완료되었습니다.");

      // window.location.reload();
    });
  };
};

export default handleActions(
  {
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.comments;
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.comment_data);
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = draft.list.filter(
          (c) => c.commentId !== action.payload.commentId
        );
      }),
  },
  initialState
);

const actionCreators = {
  addCommentCodyFB,
  addCommentWatchFB,
  getComment,
  addComment,
  deleteComment,
  deleteCommentFB,
  getCommentFB,
};

export { actionCreators };
