import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import apis from "../../api/apis";
import axios from "axios";

const GET_CODYDETAIL = "GET_CODYDETAIL";

const getCodyDetail = createAction(GET_CODYDETAIL, (codyDetail) => ({
  codyDetail,
}));

const getCodyDetailFB = () => {
  return async (dispatch) => {
    try {
      const res = await apis.mainPage();
      const codyDetail = res.data;
      console.log(codyDetail);
      dispatch(getCodyDetail(codyDetail));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = {
  codyDetail: null,
};

export default handleActions(
  {
    [GET_CODYDETAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.codyDetail = action.payload.codyDetail;
      }),
  },
  initialState
);

export const actionsCreators = { getCodyDetailFB };
