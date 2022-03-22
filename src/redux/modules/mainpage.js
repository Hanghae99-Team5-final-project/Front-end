import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import apis from "../../api/apis";
import axios from "axios";

const GET_BESTLIST = "GET_BESTLIST";

const getBestList = createAction(GET_BESTLIST, (bestList) => ({
  bestList,
}));

const getBestListFB = () => {
  return async (dispatch) => {
    try {
      const res = await apis.mainPage();
      const bestList = res.data;
      console.log(bestList);
      dispatch(getBestList(bestList));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = {
  bestList: null,
};

export default handleActions(
  {
    [GET_BESTLIST]: (state, action) =>
      produce(state, (draft) => {
        draft.bestList = action.payload.bestList;
      }),
  },
  initialState
);

export const actionsCreators = { getBestListFB };
