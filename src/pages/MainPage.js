import React from "react";
import "../App.css";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionsCreators as MainlistActions } from "../redux/modules/mainpage";
import MoreButton from "../components/button/MoreButton";
import ScrollTopButton from "../components/button/ScrollTopButton";
import WatchCard from "../components/WatchCard";
import { Link } from "react-router-dom";
import topBanner from "../images/topBanner.png";

export default function MainPage() {
  React.useEffect(() => {
    dispatch(MainlistActions.getBestListFB());
  }, []);

  const dispatch = useDispatch();
  const { bestList, codyList, coupleList } = useSelector((state) => ({
    bestList: state.mainpage.bestList,
    codyList: state.mainpage.codyList,
    coupleList: state.mainpage.coupleList,
  }));
  console.log(bestList);
  console.log(codyList);
  console.log(coupleList);

  return (
    <div className="wrap">
      <TopImg src={topBanner} alt="탑배너" />
      <div className="center">
        <MoreButton bg />
        <ScrollTopButton />
        <ScrollTopButton border />

        <WatchCardWrap>
          <div className="category">
            <label className="title">Best</label>
            <span className="description">이번 주 가장 인기있는 아이템</span>
          </div>
          <Card>
            {bestList &&
              bestList.slice(0, 4).map((data, i) => {
                return (
                  <Link to={`/watchdetail/${data.watchId}`} key={i}>
                    <WatchCard data={data} />
                  </Link>
                );
              })}
          </Card>
          <div className="btn-area">
            <MoreButton />
          </div>
        </WatchCardWrap>
        <WatchCardWrap>
          <div className="category">
            <label className="title">Couple</label>
            <span className="description">커플아이템</span>
          </div>
          <Card>
            {coupleList &&
              coupleList.slice(0, 4).map((data, i) => {
                console.log(data);
                return (
                  <Link to={`/watchdetail/${data.watchId}`} key={i}>
                    <WatchCard data={data} />
                  </Link>
                );
              })}
          </Card>
          <div className="btn-area">
            <MoreButton />
          </div>
        </WatchCardWrap>
      </div>
    </div>
  );
}

const TopImg = styled.img`
  width: 100%;
`;

const WatchCardWrap = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 10rem;
  margin-bottom: 5rem;

  .category {
    margin-bottom: 10rem;

    .title {
      font-weight: bold;
      font-size: 2rem;
      line-height: 2.9rem;
      margin-bottom: 2.3rem;
    }

    .description {
      font-size: 1.6rem;
    }

    .btn-area {
      margin-top: 8rem;
    }
  }
`;

const Card = styled.div`
  display: flex;
`;
