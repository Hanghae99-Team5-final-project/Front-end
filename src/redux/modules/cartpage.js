import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import apis from "../../api/apis";
import axios from "axios";

const GET_CARTPAGELIST = "GET_CARTPAGELIST";
const token = localStorage.getItem("token");
const getCartpageList = createAction(GET_CARTPAGELIST, (cartpageList) => ({
  cartpageList,
}));

const getCartpageListFB = () => {
  console.log("도착1");
  return async (dispatch, getState) => {
    try {
      console.log("도착2");
      const res = await axios.get("http://3.35.167.81:8080/api/user/like", {
        headers: { Authorization: token },
      });
      const cartpageList = res.data;
      console.log(cartpageList);
      dispatch(getCartpageList(cartpageList));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = {
  cartpageList: null,
};

export default handleActions(
  {
    [GET_CARTPAGELIST]: (state, action) =>
      produce(state, (draft) => {
        draft.cartpageList = action.payload.cartpageList;
      }),
  },
  initialState
);

export const actionsCreators = { getCartpageListFB };
