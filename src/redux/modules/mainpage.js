import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import apis from "../../api/apis";

const initialState = {};

const GET_BESTLIST = "GET_BESTLIST";
const GET_CODY_LIST = "GET_CODY_LIST";
const GET_COUPLE_LIST = "GET_COUPLE_LIST";

const getBestList = createAction(GET_BESTLIST, (bestList) => ({
  bestList,
}));
const getCodyList = createAction(GET_CODY_LIST, (codyList) => ({ codyList }));
const getCoupleList = createAction(GET_COUPLE_LIST, (coupleList) => ({
  coupleList,
}));

const getBestListFB = () => {
  return async (dispatch) => {
    console.log(1234);
    try {
      const res = await apis.mainPage();
      const getData = res.data;
      console.log(getData);
      dispatch(getBestList(getData.bestList));
      dispatch(getCodyList(getData.codyList));
      dispatch(getCoupleList(getData.coupleList));
    } catch (err) {
      console.log(err);
    }
  };
};

export default handleActions(
  {
    [GET_BESTLIST]: (state, action) =>
      produce(state, (draft) => {
        draft.bestList = action.payload.bestList;
      }),
    [GET_CODY_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.codyList = action.payload.codyList;
      }),
    [GET_COUPLE_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.coupleList = action.payload.coupleList;
      }),
  },
  initialState
);

export const actionsCreators = { getBestListFB };
