import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Like from "../images/like.png";
import emptyLike from "../images/empty-like.png";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionCreators as postActions } from "../redux/modules/post";
import CommentDetail from "../components/CommentDetail";
function WatchDetail(props) {
  const watchId = useParams().id;
  console.log(watchId);
  const dispatch = useDispatch();
  const like_state = useSelector((state) => state.post.like);
  const [like, setLike] = React.useState(like_state); // 좋아요
  const like_list = useSelector((state) => state.post.likes);

  const [detail, setDetail] = useState({});
  const toggleLike = (type) => {
    console.log(type);
    dispatch(postActions.likePostFB(watchId));
    setLike(!like);
    dispatch(postActions.like(like));
  };
  console.log(props);

  React.useEffect(() => {
    if (like_list[watchId] === true) {
      setLike(true);
    }
    axios
      .get(`http://13.124.237.131:8080/api/detail/${watchId}`)
      .then((res) => {
        if (res.data.success) {
          console.log("res.data", res.data);
          setDetail(res.data);
        }
      })
      .catch((err) => {
        console.log("Error response:");
      });
  }, []);
  return (
    <>
      <WatchDetailBlock>
        <div style={{ width: "100%", padding: "3rem 4rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {!like ? (
              <img
                src={emptyLike}
                alt="emptyLike"
                onClick={() => {
                  toggleLike(false);
                }}
              />
            ) : (
              <img
                src={Like}
                alt="Like"
                onClick={() => {
                  toggleLike(true);
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
`;
export default WatchDetail;
