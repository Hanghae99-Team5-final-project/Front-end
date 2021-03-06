import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../api/apis";
import moment from "moment";

const GET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const EDIT_COMMENT = "EDIT_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

const getComment = createAction(GET_COMMENT, (comments) => ({
  comments,
}));

const getcodyComment = createAction(GET_COMMENT, (comments) => ({
  comments,
}));
const addComment = createAction(ADD_COMMENT, (comment_data) => ({
  comment_data,
}));

const editComment = createAction(EDIT_COMMENT, (commentId, comment) => ({
  commentId,
  comment,
}));

const deleteComment = createAction(DELETE_COMMENT, (commentId) => ({
  commentId,
}));

const initialState = {
  list: [],
};

const getCommentFB = (commentId) => {
  return async function (dispatch) {
    try {
      const res = await apis.getComment(commentId);
      dispatch(getComment(res.data.comment));
    } catch (err) {
      console.log(err);
    }
  };
};

const addCommentCodyFB = (
  commentUser,
  commentContent,
  commentId,
  createdAt,
  codyId
) => {
  console.log(commentId);
  return async function (dispatch, getState) {
    try {
      const res = await apis.addCommentCody(
        commentUser,
        commentContent,
        commentId,
        createdAt,
        codyId
      );

      dispatch(
        addComment({
          commentUser: getState().user.user.username,
          commentContent,
          commentId: res.data.commentId,
          createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
};

const addCommentWatchFB = (
  commentUser,
  commentContent,
  commentId,
  createdAt
) => {
  console.log(commentId);
  return async function (dispatch, getState) {
    try {
      const res = await apis.addCommentWatch(
        commentUser,
        commentContent,
        commentId,
        createdAt
      );

      dispatch(
        addComment({
          commentUser: getState().user.user.username,
          commentContent,
          commentId: res.data.commentId,
          createdAt: moment().format("YYYY-MM-DD hh:mm:ss"),
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
};

const editCommentDB = (commentId, watchId, edit_content) => {
  return async function (dispatch) {
    try {
      console.log(commentId, watchId);
      const { data } = await apis.UpdateComment(
        commentId,
        parseInt(watchId),
        edit_content
      );
      dispatch(editComment(commentId, edit_content));
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
};

const deleteCommentFB = (commentId) => {
  return async function (dispatch) {
    await apis.deleteComment(commentId).then((res) => {
      dispatch(deleteComment(commentId));
      console.log(res);
      window.alert("?????????????????????.");
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
    [EDIT_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.map((a) => {
          if (a.commentId === action.payload.commentId) {
            a.commentContent = action.payload.comment;
          }
          return a;
        });
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
  editCommentDB,
  getcodyComment,
};

export { actionCreators };
