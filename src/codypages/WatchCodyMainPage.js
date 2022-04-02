import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as codyDetailActions } from "../redux/modules/post";
import { actionsCreators as CategorylistActions } from "../redux/modules/category";
import "../App.css";
import CodyCard from "../components/CodyCard";
import { history } from "../redux/configStore";
const WatchCodyMainPageBlock = styled.div`
  .container {
    display: flex;
  }
  .flex-item {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 60vh;
    margin-top: 50px;
    align-items: center;
    justify-content: space-around;
    line-height: 5;
  }
  .box_hover {
    cursor: pointer;
    :hover {
      opacity: 0.8;
      transition: all 500ms;
    }
  }
  .ani-x:hover {
    animation-name: turn;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
  @keyframes turn {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-15deg);
    }
    100% {
      transform: rotate(45deg) scale(2);
    }
  }
  .ani-x {
    margin: 200px auto;
    text-align: center;
    font-size: 37px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    background-color: lightgrey;
    border-radius: 100px;
  }
  .flex-imgbox {
    width: 300px;
    height: 300px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;
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

  React.useEffect(() => {
    dispatch(codyDetailActions.getCodyMainFB());
  }, []);


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

  return (
    <WatchCodyMainPageBlock>
      <div className="flex-item">
        {/* <img src={WatchImage} alt={WatchImage} height="400px" width="400px" /> */}
        {codydetails?.map((menu, idx) => {
          return (
            <div className="flex_box" key={idx}>
              <div className="box_hover">
                <div
                  className="flex-imgbox"
                  onClick={() =>
                    history.push(`/watchcodydetail/${menu.codyId}`)
                  }
                >
                  <img size="15%" src={menu.imageUrl} />
                </div>
              </div>
              <p className="artist_name">{menu.codyContent}</p>
            </div>
          );
        })}

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
