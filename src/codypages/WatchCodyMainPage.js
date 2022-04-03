import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionsCreators as CategorylistActions } from "../redux/modules/category";
import "../App.css";
import CodyCard from "../components/CodyCard";

const WatchCodyMainPage = () => {
  React.useEffect(() => {
    dispatch(CategorylistActions.getCategoryListFB());
  }, []);

  const dispatch = useDispatch();
  const codydetails = useSelector((state) => state.codydetail.codyMain);
  // const WatchImage = useSelector((state) => state.codydetail.watchImage);
  // const WatchBrand = useSelector((state) => state.post.postdetail.watchBrand);
  // const LowestPrice = useSelector((state) => state.post.postdetail.lowestPrice);

  console.log(codydetails);

  const CategoryList = useSelector(({ category }) => category.categoryList);

  return (
    <div className="wrap">
      <div className="center">
        <WatchPageWrap>
          <div className="go-post">
            <Link to="/">내 코디 글 쓰러가기</Link>
          </div>
          <Card>
            {CategoryList &&
              CategoryList.coupleList.map((data, i) => {
                return (
                  <Link to={`/watchdetail/${data.watchId}`} key={i}>
                    <CodyCard data={data} />
                  </Link>
                );
              })}
            {CategoryList &&
              CategoryList.digitalList.map((data, i) => {
                return (
                  <Link to={`/watchdetail/${data.watchId}`} key={i}>
                    <CodyCard data={data} />
                  </Link>
                );
              })}
          </Card>
          <div className="btn-wrap">
            <button type="button" className="short-btn">
              More
            </button>
          </div>
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

  .go-post {
    text-align: right;
    padding-right: 8%;

    a {
      text-decoration: underline;
      font-size: 1.6rem;
    }
  }
`;

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
`;

export default WatchCodyMainPage;
