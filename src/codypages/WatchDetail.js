import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Like from "../images/like.png";
import emptyLike from "../images/empty-like.png";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionCreators as postActions } from "../redux/modules/post";
import CommentDetail from "../components/CommentDetail";
import { Card } from "react-bootstrap";
import apis from "../api/apis";

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
  console.log("likeId" + likeId);

  const sendLike = () => {
    dispatch(postActions.likePostFB(watchId));
    console.log("sendlike끝");
  };

  const deleteLike = () => {
    console.log(likeId);
    dispatch(postActions.deleteDB(likeId));
  };

  console.log(props);

  // return (
  //   <Card style={{ width: "18rem" }}>
  //     <Card.Img variant="top" src="holder.js/100px180" />
  //     <Card.Body>
  //       <Card.Title></Card.Title>
  //       <Card.Text>
  //         Some quick example text to build on the card title and make up the
  //         bulk of the card's content.
  //       </Card.Text>
  //     </Card.Body>
  //   </Card>
  // );

  return (
    <>
      <WatchDetailBlock>
        {/* {renderCards} */}

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
        <CommentDetail />
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
  .Card {
    width: 200px;
    height: 100px;
    border: 1px solid black;
  }
`;

export default WatchDetail;
