import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import apis from "../../api/apis";
import axios from "axios";

const GET_CATEGORYLIST = "GET_CATEGORYLIST";
const token = localStorage.getItem("token");
const getCategoryList = createAction(GET_CATEGORYLIST, (categoryList) => ({
  categoryList,
}));

const getCategoryListFB = () => {
  console.log("도착1");
  return async (dispatch, getState) => {
    try {
      console.log("도착2");
      const res = await axios.get(
        "http://13.124.237.131:8080/api/watch/category",
        {
          headers: { Authorization: token },
        }
      );
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
