import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { actionCreators as codyDetailActions } from "../redux/modules/codydetail";
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
`;
const WatchCodyMainPage = () => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

  console.log(post_list);

  // React.useEffect(() => {
  //   if (post_list.length < 3) {
  //     dispatch(codyDetailActions.getCodyDetail());
  //   }
  // }, []);

  const [Items, setItem] = useState([
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJFk0TzJ_yq_0nU4JXX4Oig3bfBPSgJiORg&usqp=CAU",
      codyContent: "벨앤로스 BR 01 사이버 스컬",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJFk0TzJ_yq_0nU4JXX4Oig3bfBPSgJiORg&usqp=CAU",
      codyContent: "벨앤로스 BR 01 사이버 스컬",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJFk0TzJ_yq_0nU4JXX4Oig3bfBPSgJiORg&usqp=CAU",
      codyContent: "벨앤로스 BR 01 사이버 스컬",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJFk0TzJ_yq_0nU4JXX4Oig3bfBPSgJiORg&usqp=CAU",
      codyContent: "벨앤로스 BR 01 사이버 스컬",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJFk0TzJ_yq_0nU4JXX4Oig3bfBPSgJiORg&usqp=CAU",
      codyContent: "벨앤로스 BR 01 사이버 스컬",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJFk0TzJ_yq_0nU4JXX4Oig3bfBPSgJiORg&usqp=CAU",
      codyContent: "벨앤로스 BR 01 사이버 스컬",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJFk0TzJ_yq_0nU4JXX4Oig3bfBPSgJiORg&usqp=CAU",
      codyContent: "벨앤로스 BR 01 사이버 스컬",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJFk0TzJ_yq_0nU4JXX4Oig3bfBPSgJiORg&usqp=CAU",
      codyContent: "벨앤로스 BR 01 사이버 스컬",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJFk0TzJ_yq_0nU4JXX4Oig3bfBPSgJiORg&usqp=CAU",
      codyContent: "벨앤로스 BR 01 사이버 스컬",
    },
  ]);
  return (
    <WatchCodyMainPageBlock>
      <div className="flex-item">
        {Items?.allCodyList?.map((menu, idx) => {
          return (
            <div className="flex_box" key={idx}>
              <div className="box_hover">
                <Link to="watchcodydetail/:id">
                  <img size="15%" src={menu.imageUrl} />
                </Link>
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
