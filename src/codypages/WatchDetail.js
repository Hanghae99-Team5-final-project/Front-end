import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Like from "../images/like.png";
import emptyLike from "../images/empty-like.png";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionCreators as postActions } from "../redux/modules/post";
import CommentDetail from "../components/CommentDetail";

function WatchDetail(props) {
  React.useEffect(() => {
    dispatch(postActions.getDetail(watchId));
    dispatch(postActions.getLike(watchId));
  }, []);

  const watchId = useParams().id;
  const dispatch = useDispatch();
  const like_state = useSelector((state) => state.post.like);
  console.log(like_state);
  const likeId = useSelector((state) => state.post.likeId);
  const postData = useSelector((state) => state.post.postdetail);
  const WatchImage = useSelector((state) => state.post.postdetail.watchImage);
  const WatchBrand = useSelector((state) => state.post.postdetail.watchBrand);
  const LowestPrice = useSelector((state) => state.post.postdetail.lowestPrice);
  console.log(watchId);
  console.log(WatchImage);
  console.log("likeId" + likeId);

  React.useEffect(() => {
    console.log("되라 제발");
    console.log(postData);

    console.log("에러에러에러");
    dispatch(postActions.getPostFB(watchId));
  }, []);

  const sendLike = () => {
    dispatch(postActions.likePostFB(watchId));
    console.log("sendlike끝");
  };

  const deleteLike = () => {
    console.log(likeId);
    dispatch(postActions.deleteDB(likeId));
  };

  console.log(props);

  return (
    <>
      <WatchDetailBlock>
        <div className="detailImage">
          <img src={WatchImage} alt={WatchImage} height="400px" width="400px" />
          <div className="flex-box">{WatchBrand}</div>
          <div className="flex-box">{LowestPrice}</div>
        </div>
        <div style={{ width: "100%", padding: "3rem 4rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {!like_state && (
              <img
                src={emptyLike}
                alt="emptyLike"
                onClick={() => {
                  sendLike();
                }}
              />
            )}
            {like_state && (
              <img
                src={Like}
                alt="Like"
                onClick={() => {
                  deleteLike();
                }}
              />
            )}
          </div>
        </div>
        <CommentDetail watchId={watchId} />
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
  .detailImage {
    width: 200px;
    height: 100px;
  }
  .flex-item {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    height: 60vh;
    margin-top: 50px;
    align-items: center;
    justify-content: space-around;
    line-height: 1;
    margin: auto;
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
  .Card {
    width: 200px;
    height: 100px;
    border: 1px solid black;
  }
`;

export default WatchDetail;
