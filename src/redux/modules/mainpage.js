import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import apis from "../../api/apis";

const GET_BESTLIST = "GET_BESTLIST";

const getBestList = createAction(GET_BESTLIST, (bestList) => ({
  bestList,
}));

const getBestListFB = () => {
  console.log("도착1");
  return async (dispatch) => {
    try {
      console.log("도착2");
      const response = await apis({
        method: "get",
        url: `/main`,
      });
      const bestList = response.data;
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
