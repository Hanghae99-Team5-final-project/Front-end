import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Like from "../images/like.png";
import emptyLike from "../images/empty-like.png";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionCreators as postActions } from "../redux/modules/post";
import WatchCodyDetail from "./WatchCodyDetail";

function WatchDetail() {
  const dispatch = useDispatch();
  const params = useParams();
  const watchId = params.watchId;
  const comment = React.useRef();
  const like_state = useSelector((state) => state.post.like);
  const [like, setLike] = React.useState(like_state); // 좋아요
  const like_list = useSelector((state) => state.post.likes);

  const toggleLike = () => {
    dispatch(postActions.likePostFB(watchId));
    setLike(!like);
    dispatch(postActions.like(like));
  };
  React.useEffect(() => {
    if (like_list[watchId] === true) {
      setLike(true);
    }
  }, []);
  return (
    <>
      <WatchDetailBlock>
        {!like ? (
          <img src={emptyLike} alt="emptyLike" onClick={toggleLike} />
        ) : (
          <img src={Like} alt="Like" onClick={toggleLike} />
        )}
        <WatchCodyDetail />
      </WatchDetailBlock>
    </>
  );
}
const WatchDetailBlock = styled.div`
  .container {
    margin-top: 100px;
    display: flex;
    justify-content: space-around;
  }
  .flex-item1 {
    width: 500px;
    height: 500px;
    background-color: lightgreen;
    background-position: center;
    background-size: cover;
  }
  .flex-item2 {
    width: 500px;
    height: 500px;
    background-color: lightblue;
    background-position: center;
    background-size: cover;
  }
`;
export default WatchDetail;
