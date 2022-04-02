import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as codyDetailActions } from "../redux/modules/post";
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
  const dispatch = useDispatch();
  const codydetails = useSelector((state) => state.codydetail.codyMain);
  // const WatchImage = useSelector((state) => state.codydetail.watchImage);
  // const WatchBrand = useSelector((state) => state.post.postdetail.watchBrand);
  // const LowestPrice = useSelector((state) => state.post.postdetail.lowestPrice);

  console.log(codydetails);

  React.useEffect(() => {
    dispatch(codyDetailActions.getCodyMainFB());
  }, []);

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

      <Link to="/watchcodywrite">
        <div className="ani-x">+</div>
      </Link>
    </WatchCodyMainPageBlock>
  );
};

export default WatchCodyMainPage;
