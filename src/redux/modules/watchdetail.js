import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import apis from "../../api/apis";
import axios from "axios";

const GET_WATCHDETAIL = "GET_WATCHDETAIL";
const token = localStorage.getItem("token");
const getwatchDetail = createAction(GET_WATCHDETAIL, (watchDetailList) => ({
  watchDetailList,
}));

const getwatchDetailFB = (watchId) => {
  console.log("도착1");
  return async (dispatch, getState) => {
    try {
      console.log("도착2");
      const res = await apis.watchDetailPage(watchId);
      const watchDetailList = res.data;
      console.log(watchDetailList);
      dispatch(getwatchDetail(watchDetailList));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = {
  watchDetailList: null,
};

export default handleActions(
  {
    [GET_WATCHDETAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.watchDetailList = action.payload.watchDetailList;
      }),
  },
  initialState
);

export const actionsCreators = { getwatchDetailFB };
