import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { actionsCreators as CartpagelistActions } from "../redux/modules/cartpage";

const CartPage = () => {
  const CartpageList = useSelector(({ cartpage }) => cartpage.cartpageList);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(CartpagelistActions.getCartpageListFB());
  }, []);

  return (
    <CartPageBlock>
      <div className="flex-item">
        {CartpageList?.map((menu, idx) => {
          return (
            <div className="flex_box" key={idx}>
              <img size="15%" src={menu.watchImageUrl} />

              <div className="box_name">
                <p style={{ fontSize: "20px" }}>{menu.watchBrand}</p>
                <p style={{ color: "red" }}>{menu.lowestPrice}</p>
              </div>
            </div>
          );
        })}
      </div>
    </CartPageBlock>
  );
};
const CartPageBlock = styled.div`
  .flex-item {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 60vh;
    margin-top: 100px;
    align-items: center;
    line-height: 5;
  }
  img,
  svg {
    vertical-align: middle;
    width: 350px;
    height: 300px;
    padding: 20px;
    margin-left: 210px;
    cursor: pointer;
    :hover {
      opacity: 0.7;
    }
  }
  .box_name {
    margin-left: 230px;
    letter-spacing: 5px;
    line-height: 10px;
  }
`;
export default CartPage;
