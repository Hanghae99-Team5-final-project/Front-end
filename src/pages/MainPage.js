import React from "react";
import "../App.css";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionsCreators as MainlistActions } from "../redux/modules/mainpage";
import MoreButton from "../components/button/MoreButton";
import ScrollTopButton from "../components/button/ScrollTopButton";
import WatchCard from "../components/WatchCard";

export default function MainPage() {
  const dispatch = useDispatch();
  const MainList = useSelector(({ mainpage }) => mainpage.bestList);
  console.log(MainList);

  React.useEffect(() => {
    dispatch(MainlistActions.getBestListFB());
  }, []);

  return (
    <div className="wrap">
      <div className="center">
        <MoreButton />
        <MoreButton bg />
        <ScrollTopButton />
        <ScrollTopButton border />
        <WatchCardWrap>
          <WatchCard />
          <WatchCard />
          <WatchCard />
          <WatchCard />
        </WatchCardWrap>
      </div>
    </div>
  );
}

const WatchCardWrap = styled.div`
  display: flex;
`;
