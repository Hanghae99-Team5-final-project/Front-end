import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { actionsCreators as CartpagelistActions } from "../redux/modules/cartpage";
import WatchCard from "../components/WatchCard";
import { Link } from "react-router-dom";
const CartPage = () => {
  const CartpageList = useSelector(({ cartpage }) => cartpage.cartpageList);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(CartpagelistActions.getCartpageListFB());
  }, []);
  return (
    <div className="wrap">
      <div className="center">
        <WatchPageWrap>
          <Card>
            {CartpageList?.map((data, i) => {
              return (
                <Link to={`/watchdetail/${data.watchId}`} key={i}>
                  <WatchCard data={data} />
                </Link>
              );
            })}
          </Card>
        </WatchPageWrap>
      </div>
    </div>
  );
};

const WatchPageWrap = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 10rem;
  margin-bottom: 5rem;
`;

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: space-around;
`;
export default CartPage;
