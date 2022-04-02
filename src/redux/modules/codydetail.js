import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import apis from "../../api/apis";
import axios from "axios";
import { actionCreators as commentActions } from "./comment";
const GET_CODYMAIN = "GET_CODYMAIN";
const GET_CODYDETAIL = "GET_CODYDETAIL";
const getCodyMain = createAction(GET_CODYMAIN, (codyMain) => ({
  codyMain,
}));

const getCodyDetail = createAction(GET_CODYDETAIL, (codyDetail) => ({
  codyDetail,
}));

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
        watchModel: res.data.watchModel,
        codyTitle: res.data.codyTitle,
        imageUrl: res.data.imageUrl,
        codyContent: res.data.codyContent,
      };
      console.log();
      dispatch(getCodyDetail(doc));
      dispatch(commentActions.getComment(res.data.commentResponseDtoList));
    } catch (err) {
      console.log(err);
    }
  };
};
const initialState = {
  codyMain: null,
  codyDetail: null,
};

export default handleActions(
  {
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

export const actionsCreators = { getCodyMainFB, getCodyDetailFB };
