import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import apis from "../../api/apis";

const GET_CATEGORYLIST = "GET_CATEGORYLIST";
const getCategoryList = createAction(GET_CATEGORYLIST, (categoryList) => ({
  categoryList,
}));

const getCategoryListFB = () => {
  console.log("도착1");
  return async (dispatch) => {
    try {
      console.log("도착2");
      const res = await apis.categoryPage();
      const categoryList = res.data;
      console.log(categoryList);
      dispatch(getCategoryList(categoryList));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = {
  categoryList: null,
};

export default handleActions(
  {
    [GET_CATEGORYLIST]: (state, action) =>
      produce(state, (draft) => {
        draft.categoryList = action.payload.categoryList;
      }),
  },
  initialState
);

export const actionsCreators = { getCategoryListFB };
